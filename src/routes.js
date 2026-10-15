// Every page is its own chunk, so a visitor only downloads the page they open.
const pages = import.meta.glob('./pages/*.jsx');

// URL path -> page component file. Clean URLs without .html extension.
// .htaccess redirects .html URLs to clean versions; prerendered files still have .html.
export const routes = {
  '/': 'Home',
  '/index.html': 'Home',
  '/about': 'About',
  '/about.html': 'About',
  '/capabilities': 'Capabilities',
  '/capabilities.html': 'Capabilities',
  '/how-we-work': 'HowWeWork',
  '/how-we-work.html': 'HowWeWork',
  '/manufacturing': 'Manufacturing',
  '/manufacturing.html': 'Manufacturing',
  '/network': 'Network',
  '/network.html': 'Network',
  '/contact': 'Contact',
  '/contact.html': 'Contact',
  '/privacy-policy': 'PrivacyPolicy',
  '/privacy-policy.html': 'PrivacyPolicy',
  '/cookie-policy': 'CookiePolicy',
  '/cookie-policy.html': 'CookiePolicy',
  '/thank-you': 'ThankYou',
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
