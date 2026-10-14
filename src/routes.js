// Every page is its own chunk, so a visitor only downloads the page they open.
const pages = import.meta.glob('./pages/*.jsx');

// URL path -> page component file. Paths keep the original .html URLs so
// existing links, canonicals and the sitemap continue to work.
export const routes = {
  '/': 'Home',
  '/index.html': 'Home',
  '/about.html': 'About',
  '/capabilities.html': 'Capabilities',
  '/how-we-work.html': 'HowWeWork',
  '/manufacturing.html': 'Manufacturing',
  '/network.html': 'Network',
  '/contact.html': 'Contact',
  '/privacy-policy.html': 'PrivacyPolicy',
  '/cookie-policy.html': 'CookiePolicy',
  '/thank-you.html': 'ThankYou',
  '/404.html': 'NotFound',
};

// Output file written for each prerendered page.
export const prerenderRoutes = [
  ['/', 'index.html'],
  ['/about.html', 'about.html'],
  ['/capabilities.html', 'capabilities.html'],
  ['/how-we-work.html', 'how-we-work.html'],
  ['/manufacturing.html', 'manufacturing.html'],
  ['/network.html', 'network.html'],
  ['/contact.html', 'contact.html'],
  ['/privacy-policy.html', 'privacy-policy.html'],
  ['/cookie-policy.html', 'cookie-policy.html'],
  ['/thank-you.html', 'thank-you.html'],
  ['/404.html', '404.html'],
];

export const pageKeyFor = path => routes[path] || 'NotFound';

export const loadPage = key => (pages[`./pages/${key}.jsx`] || pages['./pages/NotFound.jsx'])();
