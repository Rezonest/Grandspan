// Per-page <head> tags. Rendered into each HTML file at build time, and
// updated in place on client-side navigation.
export const SITE = 'https://grandspan.co.uk';

const canonical = meta => SITE + meta.path;

const tags = meta => [
  ['meta', 'name', 'description', meta.description],
  ['meta', 'name', 'robots', meta.robots],
  ['meta', 'property', 'og:title', meta.title],
  ['meta', 'property', 'og:description', meta.description],
  ['meta', 'property', 'og:url', canonical(meta)],
  ['meta', 'name', 'twitter:title', meta.title],
  ['meta', 'name', 'twitter:description', meta.description],
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ldJson = data => JSON.stringify(data).replace(/</g, '\\u003c');

export function renderHead(meta) {
  return [
    `<title>${esc(meta.title)}</title>`,
    `<link rel="canonical" href="${esc(canonical(meta))}">`,
    ...tags(meta).map(([, attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}">`),
    ...meta.jsonLd.map(d => `<script type="application/ld+json" data-page-ld>${ldJson(d)}</script>`),
  ].join('\n');
}

export function applyMeta(meta) {
  const head = document.head;
  document.title = meta.title;
  let link = head.querySelector('link[rel="canonical"]');
  if (!link) head.append(link = Object.assign(document.createElement('link'), { rel: 'canonical' }));
  link.href = canonical(meta);
  for (const [, attr, key, value] of tags(meta)) {
    let el = head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); head.append(el); }
    el.content = value;
  }
  head.querySelectorAll('script[data-page-ld]').forEach(s => s.remove());
  for (const d of meta.jsonLd) {
    const s = Object.assign(document.createElement('script'), { type: 'application/ld+json', textContent: ldJson(d) });
    s.setAttribute('data-page-ld', '');
    head.append(s);
  }
}
