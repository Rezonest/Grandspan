import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/404.html",
  "title": "Page Not Found | Grandspan",
  "description": "The page you were looking for could not be found.",
  "robots": "noindex,follow",
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
          "name": "Page Not Found",
          "item": "https://grandspan.co.uk/404.html"
        }
      ]
    }
  ]
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{minHeight: "62vh", display: "flex", alignItems: "center"}}><div className="wrap">
      <p className="eyebrow light">Page not found</p><h1>This page has moved <span className="serif">or no longer exists.</span></h1>
      <p className="lede">The link may be out of date. Use the menu, or start from one of the pages below.</p>
      <div className="actions" style={{marginTop: "2rem"}}><Link className="btn btn-light" to="/">Back to home <ArrowIcon /></Link><Link className="btn btn-ghost" to="/contact.html">Contact us</Link></div>
      </div></section>
    </>
  );
}
