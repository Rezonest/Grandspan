// Centralized router configuration — read once at module load
// For browser: use Vite's import.meta.env (prefixed with VITE_)
// For build: set via environment variable
const ROUTER_MODE = import.meta.env.VITE_ROUTER_MODE || 'hash';
const IS_HASH_MODE = ROUTER_MODE === 'hash';

export function getPathFromLocation() {
  return IS_HASH_MODE ? location.hash.slice(1) || '/' : location.pathname;
}

export function urlToPathname(url) {
  if (IS_HASH_MODE) {
    return url.pathname.startsWith('#') ? url.pathname.slice(1) : url.pathname;
  }
  return url.pathname;
}

export function setupRouterListener(handleChange) {
  const eventName = IS_HASH_MODE ? 'hashchange' : 'popstate';
  window.addEventListener(eventName, handleChange);
  return () => window.removeEventListener(eventName, handleChange);
}
