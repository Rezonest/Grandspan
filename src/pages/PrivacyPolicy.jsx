import { Link } from '../router.jsx';

export const meta = {
  "path": "/privacy-policy",
  "title": "Privacy Policy | Grandspan",
  "description": "How Grandspan Engineering & Projects Limited handles personal information from website visitors and project enquiries.",
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
          "name": "Privacy Policy",
          "item": "https://grandspan.co.uk/privacy-policy.html"
        }
      ]
    }
  ]
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><p className="eyebrow light">Grandspan / Information</p><h1>Privacy <span className="serif">Policy.</span></h1><p className="lede">How we handle personal information when you visit this website or contact us about a project.</p></div></section>
      <section><div className="wrap legal">
      <aside><p className="sub-h" style={{marginTop: "0"}}>On this page</p><ul><li><a href="#who">Who we are</a></li><li><a href="#receive">Information we receive</a></li><li><a href="#use">How we use it</a></li><li><a href="#providers">Service providers</a></li><li><a href="#sharing">Sharing and transfers</a></li><li><a href="#retention">Retention</a></li><li><a href="#rights">Your rights</a></li></ul><p className="fine">Last updated: 6 October 2026</p></aside>
      <article className="prose">
      <h2 id="who">Who we are</h2>
      <p>Grandspan Engineering &amp; Projects Limited is responsible for the personal information described in this policy. Our company number is 17483898 and our registered office is 20 Wenlock Road, London N1 7GU, United Kingdom.</p>
      <p>For privacy questions, requests or complaints, email <a href="mailto:info@grandspan.co.uk">info@grandspan.co.uk</a>.</p>
      <h2 id="receive">Information we receive</h2>
      <p>If you use the enquiry form on our <Link to="/contact">Contact page</Link>, we receive the details you enter. That means your name and email address, plus any company, phone number, project location, area of support, programme and project description you provide. We also record that you agreed to this policy. If you email us directly, we receive your email address, any contact details you include and the content of your message.</p>
      <p>If you introduce another person as part of an enquiry, we may receive their professional contact details from you.</p>
      <p>When you visit the site, our hosting provider and the services that deliver the site's fonts and map may process technical information to deliver and protect it. This can include your IP address, browser and device details, the pages requested and the time of each request.</p>
      <h2 id="use">How we use it</h2>
      <ul>
      <li>To read, respond to and follow up on your enquiry, assess a potential project and communicate with relevant contacts. Our lawful basis is our legitimate interest in managing business enquiries and relationships. Where applicable, it is also taking steps toward a contract at your request.</li>
      <li>To send you an automatic email confirming we have received your enquiry, with a copy of what you submitted.</li>
      <li>To operate and secure the website, prevent spam and investigate technical issues. Our lawful basis is our legitimate interest in maintaining a secure and usable website.</li>
      <li>To keep records where required by law, or to manage a contract or legal claim. Depending on the record, the basis may be a legal obligation, a contract or legitimate interests.</li>
      </ul>
      <p>We do not use website enquiries for marketing without your agreement. We do not use them for any automated decision that has a legal or similarly significant effect on you.</p>
      <h2 id="providers">Service providers</h2>
      <p>We use the following providers to run the website and handle enquiries:</p>
      <ul>
      <li><strong>FormSubmit (formsubmit.co):</strong> receives enquiry form submissions, applies spam protection, and forwards them to our inbox. It also sends your confirmation email. During submission it may show a Google reCAPTCHA check, which Google processes.</li>
      <li><strong>Our website hosting provider:</strong> serves the website and keeps technical logs.</li>
      <li><strong>Google Fonts:</strong> delivers the website's typefaces.</li>
      <li><strong>Our email provider:</strong> stores and delivers our business email.</li>
      </ul>
      <h2 id="sharing">Sharing and international transfers</h2>
      <p>Relevant Grandspan personnel and the service providers above may handle your information for the purposes described in this policy. If an enquiry needs specialist input, we may share the details needed to assess it with our engineering or delivery partners, including Tenaro Global EPC Private Limited and other companies in the Dehu Group, some of which are in India. We do not sell enquiry details.</p>
      <p>Some service providers and project partners work outside the UK. Where a transfer of personal data needs safeguards under UK data protection law, we will assess it and apply an appropriate permitted mechanism, such as the UK International Data Transfer Agreement or Addendum.</p>
      <h2 id="retention">How long we keep it</h2>
      <p>We keep enquiry correspondence while we need it to respond and follow up. After that, we keep it for a reasonable period that depends on the nature of the enquiry, any resulting project, our legal obligations and possible disputes. Contract and statutory records may need to be kept longer. Technical logs are kept according to each provider's operational and security needs. We review the information we hold and delete or anonymise it when it is no longer needed.</p>
      <h2 id="rights">Your rights and complaints</h2>
      <p>Depending on the circumstances, you can ask us to access, correct, erase or restrict the use of your personal data, or object to its use. Data portability may also apply in some cases. To make a request or raise a concern, email <a href="mailto:info@grandspan.co.uk">info@grandspan.co.uk</a>.</p>
      <p>You can also <a href="https://ico.org.uk/make-a-complaint/" rel="noopener">complain to the Information Commissioner's Office</a>. For information about this site's storage technologies, see our <Link to="/cookie-policy">Cookie Policy</Link>. We will update this policy if the site's features or data practices change.</p>
      </article>
      </div></section>
    </>
  );
}
