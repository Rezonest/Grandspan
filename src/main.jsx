import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { Router } from './router.jsx';
import { applyMeta } from './head.js';
import { loadPage, pageKeyFor } from './routes.js';
import './styles.css';

const ROUTER_MODE = process.env.ROUTER_MODE || 'hash';

async function start() {
  const root = document.getElementById('root');
  // Prerendered pages record which page they contain, so hydration always
  // matches the server HTML (e.g. 404.html served for an unknown URL).
  const prerendered = root.dataset.page;
  const initialPath = ROUTER_MODE === 'hash'
    ? (location.hash.slice(1) || '/')
    : location.pathname;
  const page = await loadPage(prerendered || pageKeyFor(initialPath));
  const app = (
    <StrictMode>
      <Router initialPath={initialPath} initialPage={page}>
        <App />
      </Router>
    </StrictMode>
  );
  if (prerendered) {
    hydrateRoot(root, app);
  } else {
    // Dev server: no prerendered markup or head tags yet.
    applyMeta(page.meta);
    createRoot(root).render(app);
  }
}

start();
