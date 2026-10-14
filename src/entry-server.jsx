import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { Router } from './router.jsx';
import { renderHead } from './head.js';
import { loadPage, pageKeyFor } from './routes.js';

export { prerenderRoutes } from './routes.js';

export async function render(path) {
  const key = pageKeyFor(path);
  const page = await loadPage(key);
  const html = renderToString(
    <Router initialPath={path} initialPage={page}>
      <App />
    </Router>
  );
  return { html, head: renderHead(page.meta), key };
}
