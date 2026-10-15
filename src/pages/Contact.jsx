import EnquiryForm from '../components/EnquiryForm.jsx';

export const meta = {
  "path": "/contact",
  "title": "Contact | Grandspan",
  "description": "Contact Grandspan Engineering & Projects Limited, 20 Wenlock Road, London N1 7GU.",
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
          "name": "Contact",
          "item": "https://grandspan.co.uk/contact.html"
        }
      ]
    }
  ]
};

export default function Contact() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
      <p className="eyebrow light">Contact</p>
      <h1>Let's discuss <span className="serif">your next project.</span></h1>
      <p className="lede">Tell us what you are planning, where the project is and the support you need. Share the scope, the key technical requirements and your target programme.</p>
      </div></section>
      <section><div className="wrap contact-grid">
      <div className="reveal">
      <div className="c-block"><h3>Registered office</h3><p>Grandspan Engineering &amp; Projects Limited<br />20 Wenlock Road<br />London N1 7GU<br />United Kingdom</p></div>
      <div className="c-block"><h3>General enquiries</h3><p><a href="mailto:info@grandspan.co.uk">info@grandspan.co.uk</a></p></div>
      <div className="c-block"><h3>Directors</h3><p>Suthakaran Subaram, Director, London<br /><a href="mailto:subaram@grandspan.co.uk">subaram@grandspan.co.uk</a></p><p style={{marginTop: ".8rem"}}>Rishi Kasiraj, Director, India<br /><a href="mailto:rishi@grandspan.co.uk">rishi@grandspan.co.uk</a></p></div>
      <div className="c-block"><h3>Group head office</h3><p>Tenaro Global EPC Private Limited<br />C Tower, C-346, Gera's Imperium Gateway, Bhosari, Pune 411034, India<br /><a href="mailto:international.business@tenaroglobal.com">international.business@tenaroglobal.com</a></p></div>
      </div>
      <EnquiryForm />
      </div></section>
    </>
  );
}
