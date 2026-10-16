import { useEffect, useRef, useState } from 'react';
import { Link, useRouter } from '../router.jsx';

const NAV = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/capabilities', 'Capabilities'],
  ['/how-we-work', 'How We Work'],
  ['/manufacturing', 'Manufacturing'],
  ['/network', 'Global Network'],
];

const isCurrent = (path, to) => path === to;

export default function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const btn = useRef(null);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') { setOpen(false); btn.current.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header"><div className="wrap">
      <Link className="brand" to="/" aria-label="Grandspan Engineering &amp; Projects Limited, home"><img src="/assets/grandspan-logo-sm.webp" alt="Grandspan Engineering and Projects Limited" width="156" height="52" /></Link>
      <button ref={btn} type="button" className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" /></svg>
      </button>
      {/* Also close on same-page links, which don't change `path`. */}
      <nav className={open ? 'nav open' : 'nav'} id="nav" aria-label="Primary" onClick={e => { if (e.target.closest('a')) setOpen(false); }}>
        {NAV.map(([to, label]) => (
          <Link key={to} to={to} aria-current={isCurrent(path, to) ? 'page' : undefined}>{label}</Link>
        ))}
        <Link className="btn-nav" to="/contact" aria-current={isCurrent(path, '/contact') ? 'page' : undefined}>Contact</Link>
      </nav>
    </div></header>
  );
}
