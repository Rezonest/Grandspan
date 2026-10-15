import { Link } from '../router.jsx';

export const meta = {
  "path": "/cookie-policy",
  "title": "Cookie Policy | Grandspan",
  "description": "How the Grandspan Engineering & Projects website uses cookies and similar technologies.",
  "robots": "index,follow,max-image-preview:large",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://grandspan.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cookie Policy",
          "item": "https://grandspan.co.uk/cookie-policy"
        }
      ]
    }
  ]
};

export default function CookiePolicy() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><p className="eyebrow light">Grandspan / Information</p><h1>Cookie <span className="serif">Policy.</span></h1><p className="lede">How this website uses cookies and similar storage technologies.</p></div></section>
      <section><div className="wrap legal">
      <aside><p className="sub-h" style={{marginTop: "0"}}>On this page</p><ul><li><a href="#current">Current use</a></li><li><a href="#essential">Essential technology</a></li><li><a href="#choices">Your choices</a></li><li><a href="#changes">Changes and contact</a></li></ul><p className="fine">Last updated: 6 October 2026</p></aside>
      <article className="prose">
      <h2 id="current">Current use</h2>
      <p>The Grandspan website does not use analytics, advertising or social media tracking cookies. The menu and expandable sections respond to your clicks while the page is open, but they do not save your choices to a cookie or to browser storage.</p>
      <p>The site has no account sign-in. The enquiry form sends your details to our form provider and does not set cookies on this website.</p>
      <h2 id="essential">Essential website technology</h2>
      <p>A hosting service delivers the site. It may use strictly necessary technical cookies or similar measures for security, routing and delivery. These are needed to provide the website you asked for. The exact technical identifiers can vary with the hosting environment and your session, and you can inspect them in your browser's site-data settings.</p>
      <p>When you submit the enquiry form, you are briefly taken to our form provider, FormSubmit, which may show a Google reCAPTCHA check. Google may set or read cookies on that page to tell people apart from automated spam. This happens on FormSubmit's page, not on this website. Google's use of that data is covered by <a href="https://policies.google.com/privacy" rel="noopener">Google's Privacy Policy</a>.</p>
      <p>The site loads typefaces from Google Fonts. Google receives technical request data, such as your IP address, but this website does not ask it to set cookies. The map software is hosted on this website itself.</p>
      <h2 id="choices">Your choices</h2>
      <p>You can view, block or delete cookies for this website in your browser settings. Blocking essential site data may affect how a page loads or works. The website sets no optional cookies, so there are no cookie preferences to save here.</p>
      <h2 id="changes">Changes and contact</h2>
      <p>If we add analytics or other non-essential cookies, we will list their names, purposes and duration on this page. Where consent is required, we will ask before setting them. For questions, email <a href="mailto:info@grandspan.co.uk">info@grandspan.co.uk</a>. For more about how we use personal information, read our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
      </article>
      </div></section>
    </>
  );
}
