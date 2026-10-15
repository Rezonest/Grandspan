// Every page is its own chunk, so a visitor only downloads the page they open.
const pages = import.meta.glob('./pages/*.jsx');

// URL path -> page component file. Clean URLs without .html extension.
export const routes = {
  '/': 'Home',
  '/about': 'About',
  '/capabilities': 'Capabilities',
  '/how-we-work': 'HowWeWork',
  '/manufacturing': 'Manufacturing',
  '/network': 'Network',
  '/contact': 'Contact',
  '/privacy-policy': 'PrivacyPolicy',
  '/cookie-policy': 'CookiePolicy',
  '/thank-you': 'ThankYou',
};

// Output file written for each prerendered page.
export const prerenderRoutes = [
  ['/', 'index.html'],
  ['/about', 'about.html'],
  ['/capabilities', 'capabilities.html'],
  ['/how-we-work', 'how-we-work.html'],
  ['/manufacturing', 'manufacturing.html'],
  ['/network', 'network.html'],
  ['/contact', 'contact.html'],
  ['/privacy-policy', 'privacy-policy.html'],
  ['/cookie-policy', 'cookie-policy.html'],
  ['/thank-you', 'thank-you.html'],
];

export const pageKeyFor = path => routes[path] || 'NotFound';

export const loadPage = key => (pages[`./pages/${key}.jsx`] || pages['./pages/NotFound.jsx'])();
