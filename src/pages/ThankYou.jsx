import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/thank-you",
  "title": "Thank You | Grandspan",
  "description": "Your enquiry has been received.",
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
          "name": "Thank You",
          "item": "https://grandspan.co.uk/thank-you.html"
        }
      ]
    }
  ]
};

export default function ThankYou() {
  return (
    <>
      <section className="page-hero" style={{minHeight: "62vh", display: "flex", alignItems: "center"}}><div className="wrap">
      <p className="eyebrow light">Enquiry received</p><h1>Thank you. <span className="serif">We'll be in touch.</span></h1>
      <p className="lede">Your enquiry has been sent to the Grandspan team, and a copy has been emailed to you. We review every brief and will reply with the right next step.</p>
      <div className="actions" style={{marginTop: "2rem"}}><Link className="btn btn-light" to="/capabilities">Explore our capabilities <ArrowIcon /></Link><Link className="btn btn-ghost" to="/">Back to home</Link></div>
      </div></section>
    </>
  );
}
