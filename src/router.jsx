import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { loadPage, pageKeyFor } from './routes.js';
import { applyMeta } from './head.js';
import { getPathFromLocation, urlToPathname, setupRouterListener } from './router-config.js';

const RouterContext = createContext(null);
export const useRouter = () => useContext(RouterContext);

// useLayoutEffect warns during server rendering; it is only needed in the browser.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function scrollToHash(hash, behavior) {
  const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) el.scrollIntoView({ behavior });
  return !!el;
}

export function Router({ initialPath, initialPage, children }) {
  const [loc, setLoc] = useState({ path: initialPath, page: initialPage, hash: '', restoreY: null, nav: 0 });
  const navId = useRef(0);

  const go = useCallback(async (url, { push = true, restoreY = null } = {}) => {
    const id = ++navId.current;
    const pathname = urlToPathname(url);
    const page = await loadPage(pageKeyFor(pathname));
    if (id !== navId.current) return; // a newer navigation started while this page loaded
    if (push) {
      history.replaceState({ ...history.state, y: window.scrollY }, '');
      history.pushState({}, '', url.href);
    }
    setLoc(l => ({ path: pathname, page, hash: url.hash, restoreY, nav: l.nav + 1 }));
  }, []);

  const navigate = useCallback(href => {
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return void location.assign(url.href);
    const pathname = urlToPathname(url);
    const currentPathname = getPathFromLocation();
    if (pathname === currentPathname) {
      // Same page: behave like a normal in-page anchor.
      if (url.hash) { history.pushState({}, '', url.href); scrollToHash(url.hash); }
      else window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    go(url);
  }, [go]);

  useEffect(() => {
    let current = getPathFromLocation();

    const handleChange = () => {
      const newPath = getPathFromLocation();
      if (newPath === current) return;
      current = newPath;
      go(new URL(location.href), { push: false, restoreY: history.state?.y ?? 0 });
    };

    return setupRouterListener(handleChange);
  }, [go]);

  // After a client-side navigation renders: update <head>, set scroll and move focus.
  useIsoLayoutEffect(() => {
    if (!loc.nav) return;
    applyMeta(loc.page.meta);
    if (loc.restoreY != null) window.scrollTo({ top: loc.restoreY, behavior: 'instant' });
    // A new page jumps straight to its anchor, as a full page load would.
    else if (!scrollToHash(loc.hash, 'instant')) window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [loc.nav]);

  return <RouterContext.Provider value={{ ...loc, navigate }}>{children}</RouterContext.Provider>;
}

export function Link({ to, onClick, ...rest }) {
  const { navigate } = useRouter();
  const prefetch = () => { loadPage(pageKeyFor(new URL(to, location.href).pathname)); };
  return (
    <a
      href={to}
      {...rest}
      onPointerEnter={prefetch}
      onFocus={prefetch}
      onClick={e => {
        onClick?.(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target) return;
        e.preventDefault();
        navigate(to);
      }}
    />
  );
}
