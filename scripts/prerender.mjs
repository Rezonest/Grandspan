// Renders every route to static HTML in dist/, so each page arrives with its
// full content and <head> tags before any JavaScript runs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');

const { render, prerenderRoutes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"><!--app-html--></div>')) {
  throw new Error('dist/index.html is missing the prerender placeholders');
}

// Preload the page's own chunk (and its shared imports) alongside the main
// bundle, instead of discovering it only after the main bundle has run.
const manifestPath = path.join(dist, '.vite/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
function preloads(key) {
  const files = new Set();
  const walk = id => {
    const chunk = manifest[id];
    if (!chunk || files.has(chunk.file)) return;
    files.add(chunk.file);
    (chunk.imports || []).forEach(walk);
  };
  walk(`src/pages/${key}.jsx`);
  // The entry is already loaded by its own <script> tag.
  const entry = Object.values(manifest).find(c => c.isEntry);
  files.delete(entry.file);
  return [...files].map(f => `<link rel="modulepreload" crossorigin href="/${f}">`).join('\n');
}

for (const [route, file] of prerenderRoutes) {
  const { html, head, key } = await render(route);
  const out = template
    .replace('<!--app-head-->', () => head + '\n' + preloads(key))
    .replace('<div id="root"><!--app-html--></div>', () => `<div id="root" data-page="${key}">${html}</div>`);
  fs.writeFileSync(path.join(dist, file), out);
  console.log(`prerendered ${route} -> dist/${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
fs.rmSync(path.join(dist, '.vite'), { recursive: true, force: true });
