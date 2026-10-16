// Router configuration for clean URLs (Hostinger deployment)
export function getPathFromLocation() {
  return location.pathname;
}

export function urlToPathname(url) {
  return url.pathname;
}

export function setupRouterListener(handleChange) {
  window.addEventListener('popstate', handleChange);
  return () => window.removeEventListener('popstate', handleChange);
}
