import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/about.html",
  "title": "About Grandspan | UK Engineering & Project Delivery",
  "description": "Grandspan is a UK-based engineering and project delivery company connected to Tenaro Global EPC and the Dehu Group.",
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
          "name": "About Grandspan",
          "item": "https://grandspan.co.uk/about.html"
        }
      ]
    }
  ]
};

export default function About() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
      <p className="eyebrow light">About Us / Grandspan</p>
      <h1>Engineering in the UK. <span className="serif">Connected to global capability.</span></h1>
      </div></section>
      
      <section><div className="wrap split">
      <div className="stack reveal">
      <p className="eyebrow">Who we are</p>
      <h2>Engineering and project delivery, <span className="serif">shaped by the brief.</span></h2>
      <p className="lede">Grandspan Engineering &amp; Projects Limited is a UK-based engineering and project delivery company providing engineering, procurement and construction support for infrastructure and industrial projects.</p>
      <p>From London, we coordinate multidisciplinary engineering, procurement, fabrication and construction activities around each client’s technical requirements. Our core infrastructure capabilities cover telecom towers and associated structures, alongside water supply and wastewater systems.</p>
      <p>Our close association with Tenaro Global EPC and the Dehu Group of Companies connects Grandspan with a wider engineering and manufacturing ecosystem. This supports access to boiler and pressure parts, pressure vessels, heat exchangers, tanks, structural fabrication and customised industrial equipment.</p>
      </div>
      <figure className="reveal"><img src="/assets/engineering-office.webp" alt="Engineering team reviewing project drawings in a meeting room" loading="lazy" width="896" height="504" decoding="async" /><figcaption>Engineering design team at Tenaro Global EPC.</figcaption></figure>
      </div></section>
      
      
      
      <section id="leadership" style={{paddingTop: "clamp(1rem,3vw,2rem)"}}><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Leadership</p><h2>Directors <span className="serif">of Grandspan.</span></h2></div>
      <p className="lede">Grandspan is led by two directors, one based in London and one in India. Between them they manage the client relationship in the UK and coordination with the engineering and manufacturing ecosystem in India.</p></div>
      <div className="leaders reveal">
      <article className="leader"><div className="mono" aria-hidden="true">SS</div><div>
      <h3>Suthakaran Subaram</h3><p className="role">Director · London, United Kingdom</p>
      <p>Suthakaran leads Grandspan's work in the UK from London. He is responsible for client relationships, business development and the commercial and contractual side of each assignment.</p>
      <p>He recently completed a Master's degree in the UK, and comes from a family with a long background in business. He combines formal training with a practical understanding of how enterprises are built and run.</p>
      <a href="mailto:subaram@grandspan.co.uk">subaram@grandspan.co.uk</a></div></article>
      <article className="leader"><div className="mono" aria-hidden="true">RK</div><div>
      <h3>Rishi Kasiraj</h3><p className="role">Director · India</p>
      <p>Rishi leads Grandspan's coordination in India. He links UK projects with the engineering teams, manufacturing facilities and supply chain of the wider ecosystem, so that each scope is resourced and delivered as agreed.</p>
      <p>He also recently completed a Master's degree in the UK and comes from a family business background. That gives him a working knowledge of both UK client expectations and Indian industrial capability.</p>
      <a href="mailto:rishi@grandspan.co.uk">rishi@grandspan.co.uk</a></div></article>
      </div>
      <p className="sub-h" style={{marginTop: "3rem"}}>Our people</p>
      <p className="reveal" style={{maxWidth: "70ch", color: "var(--ink-2)"}}>The directors are supported by a team in the UK, India and other countries, with knowledge and experience relevant to engineering, procurement, manufacturing and project delivery.</p>
      <div className="presence reveal">
      <div><b>United Kingdom</b><span>Client interface, business development, project coordination and handover.</span></div>
      <div><b>India</b><span>Engineering, design, procurement, manufacturing, quality and logistics.</span></div>
      <div><b>International</b><span>Partner teams supporting delivery in local markets across Europe, Asia-Pacific, Africa and the Americas.</span></div>
      </div>
      </div></section>
      <section className="surface tight"><div className="wrap">
      <div className="vm reveal">
      <div><p className="eyebrow">Vision</p><h3>A trusted global engineering partner.</h3><p>To become a trusted global engineering partner delivering innovative and sustainable solutions for industrial and infrastructure development.</p></div>
      <div><p className="eyebrow">Mission</p><h3>Value through technical excellence.</h3><p>To provide world-class engineering services that create value for our clients through technical excellence, operational efficiency and long-term partnerships.</p></div>
      </div></div></section>
      <section className="surface"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Connected capability</p><h2>Three companies, <span className="serif">one line of delivery.</span></h2></div>
      <p className="lede">We combine complementary capabilities for each assignment. Delivery responsibilities and scope are agreed project by project.</p></div>
      <div className="eco reveal">
      <div className="eco-node"><div className="eco-logo"><img src="/assets/dehu-logo.webp" alt="Dehu Group" width="512" height="237" /></div><span className="role">Manufacturing heritage</span><h3>Dehu Group</h3><p>A diversified industrial group serving power generation, sugar and distillery, water management, oil and gas, and process industries.</p>
      <ul><li>Heavy manufacturing and fabrication</li><li>Boiler and power-plant EPC</li><li>Operations and maintenance</li><li>Environmental solutions, trading and logistics</li></ul><span className="eco-arrow" aria-hidden="true"><ArrowIcon /></span></div>
      <div className="eco-node"><div className="eco-logo"><img src="/assets/tenaro-logo.png" alt="Tenaro Global EPC" width="522" height="126" /></div><span className="role">Engineering &amp; international EPC</span><h3>Tenaro Global EPC</h3><p>Set up to carry the group's international business forward, led by the next generation of the family leadership.</p>
      <ul><li>Structural, BIM and Tekla engineering</li><li>Telecom, water, power and marine design</li><li>Project engineering and procurement support</li><li>Head office and factory in Pune</li></ul><span className="eco-arrow" aria-hidden="true"><ArrowIcon /></span></div>
      <div className="eco-node self"><div className="eco-logo"><img src="/assets/grandspan-logo-sm.webp" alt="Grandspan" width="156" height="52" style={{background: "#fff", padding: "6px 10px", borderRadius: "4px", maxHeight: "48px"}} /></div><span className="role">UK delivery</span><h3>Grandspan Engineering &amp; Projects</h3><p>The UK entity of the network. Our role is the client relationship, scope definition and project coordination.</p>
      <ul><li>Telecom infrastructure EPC</li><li>Water and wastewater EPC</li><li>Equipment and fabrication packages</li><li>UK client interface and handover</li></ul></div>
      </div>
      </div></section>
      
      <section id="relationships" className="tight"><div className="wrap">
      <div className="indep reveal">
      <div><p className="eyebrow">Company status</p><h2>An independent UK company, <span className="serif">working in collaboration.</span></h2></div>
      <div className="stack">
      <p>Grandspan Engineering &amp; Projects Limited (company number 17483898) is an independent company registered in England and Wales. Its registered office is at 20 Wenlock Road, London N1 7GU.</p>
      <p>Grandspan works in collaboration with Tenaro Global EPC Private Limited, Dehu Group companies, including Dehu Engineering (India) Private Limited, and Lero Engineering Services. These are separate legal entities. Grandspan does not own them, their factories or their facilities, and they do not own Grandspan.</p>
      <ul className="indep-list">
      <li><strong>Who does what:</strong> manufacturing, fabrication and certain engineering services described on this website are carried out by these companies. References to "the group", "the ecosystem" or "the network" mean these collaborating companies.</li>
      <li><strong>Certifications:</strong> certifications such as ASME, IBR, ISO and BS EN 1090 are held by the collaborating companies named against them, not by Grandspan.</li>
      <li><strong>Contracting:</strong> the contracting entity, scope, responsibilities and warranties for each assignment are confirmed in writing in every proposal.</li>
      </ul>
      </div></div>
      </div></section>
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Our approach</p><h2>A clear route <span className="serif">to delivery.</span></h2></div>
      <p className="lede">Each assignment moves through defined stages, so interfaces, responsibilities and approvals are visible from day one.</p></div>
      <div className="steps reveal">
      <div className="step"><span className="n">01</span><h3>Define</h3><p>Understand the site, the technical requirements, interfaces and programme, and agree the codes that apply.</p></div>
      <div className="step"><span className="n">02</span><h3>Engineer</h3><p>Concept, basic and detailed engineering, with design validation, BIM coordination and technical specifications.</p></div>
      <div className="step"><span className="n">03</span><h3>Coordinate</h3><p>Align procurement, fabrication and inspection with the agreed scope, drawings and material requirements.</p></div>
      <div className="step"><span className="n">04</span><h3>Deliver</h3><p>Construction support, testing, commissioning, as-built documentation and after-sales service.</p></div>
      </div>
      </div></section>
      
      <section className="on-dark deep"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Depth of experience</p><h2>Senior engineers <span className="serif">behind every package.</span></h2></div>
      <p className="lede">Our ecosystem's team includes specialists with 15 to 36 years' experience in boilers, power plants, structures, telecom, construction and quality.</p></div>
      <div className="stats reveal">
      <div className="stat"><b>36+</b><span>years: construction and project management lead</span></div>
      <div className="stat"><b>32+</b><span>years: boiler and power-plant engineering and design</span></div>
      <div className="stat"><b>21+</b><span>years: IBR documentation and formalities</span></div>
      <div className="stat"><b>16+</b><span>years: quality assurance and control</span></div>
      </div>
      <p className="stats-note" style={{marginBottom: "2.5rem"}}>Senior specialists by function, from the Tenaro team and resources register. There are more team members across India.</p>
      </div></section>
      
      <section className="on-dark deep" style={{paddingTop: "0"}}><div className="wrap">
      <div className="team reveal">
      <div><h3>Marketing &amp; business development</h3><ul><li>Boiler &amp; power plants<span>35+ yrs</span></li><li>International marketing &amp; logistics<span>15+ yrs</span></li><li>Domestic marketing<span>12+ yrs</span></li></ul></div>
      <div><h3>Proposals</h3><ul><li>Boiler &amp; power-plant design<span>27+ yrs</span></li><li>Boiler &amp; power-plant design<span>23+ yrs</span></li></ul></div>
      <div><h3>Engineering</h3><ul><li>Boiler &amp; power-plant design (×2)<span>32+ yrs</span></li><li>Project execution &amp; site management<span>22+ yrs</span></li><li>Sugar, distillery, power O&amp;M<span>20+ yrs</span></li><li>Steam &amp; utility piping<span>19+ yrs</span></li><li>Structural design<span>15+ yrs</span></li><li>Telecom design &amp; detailing<span>10+ yrs</span></li></ul></div>
      <div><h3>Procurement &amp; outsourcing</h3><ul><li>Procurement lead (ex-Air Force)<span>Senior</span></li><li>Project procurement<span>14+ yrs</span></li><li>Procurement &amp; outsourcing<span>6+ yrs</span></li></ul></div>
      <div><h3>Manufacturing &amp; quality</h3><ul><li>Boiler &amp; equipment manufacturing (×2)<span>15+ yrs</span></li><li>Quality assurance &amp; control<span>16+ yrs</span></li><li>IBR documentation &amp; formalities<span>21+ yrs</span></li></ul></div>
      <div><h3>Construction &amp; operations</h3><ul><li>Construction &amp; project management<span>36+ yrs</span></li><li>Construction &amp; project management<span>24+ yrs</span></li><li>Power-plant operations &amp; maintenance<span>25+ yrs</span></li><li>Administration &amp; manpower (ex-Army)<span>Senior</span></li></ul></div>
      </div>
      </div></section>
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Group of companies</p><h2>More than 25 companies <span className="serif">behind one brief.</span></h2></div>
      <p className="lede">The Dehu Group's companies cover boilers and power-plant EPC, fabrication, inspection, consultancy and sourcing. They are based across India and in four international markets.</p></div>
      <ul className="cos reveal">
      <li>Dehu Engineering and Services<span>Chennai</span></li><li>Dehu Projects &amp; Constructions<span>Tiruchirappalli</span></li><li>Lero Engineering &amp; Services<span>Chennai</span></li><li>Radiant Engineering &amp; Services<span>Pune</span></li><li>Flowsun Equipment &amp; Services<span>Chennai</span></li><li>Glory Energy Engineering Consultant &amp; Services<span>Chennai</span></li><li>GRV Engineering Services<span>Chennai</span></li><li>Total Energy Engineering &amp; Services<span>Mysore</span></li><li>Axcel Force Manufacturing Services<span>Pune</span></li><li>Third Eye Inspection &amp; Services<span>Pune</span></li><li>Vrihad Engineering &amp; Services<span>Pune</span></li><li>Vertex Fabricator &amp; Services<span>Pune</span></li><li>Gem Projects &amp; Services<span>Pune</span></li><li>Unique Engineering<span>Pune</span></li><li>Imperiea Engineering &amp; Sourcing<span>Pune</span></li><li>Bhumatech Engineering &amp; Services<span>Tiruchirappalli</span></li><li>Powergent Consultancy Services<span>Tiruchirappalli</span></li><li>Powergent Engineering &amp; Technologies<span>Tiruchirappalli</span></li><li>DK Engineers<span>Bangalore</span></li><li>Sourcebridge Solutions<span>Hyderabad</span></li><li>Akaya Engineering LLP<span>New Delhi</span></li><li>Core Axis Global Solutions<span>New Delhi</span></li><li>Trois Plus Industries LLP<span>Ahmedabad</span></li><li>Fusion EPC Global Pte Ltd<span>Singapore</span></li><li>Apex Projects &amp; Services<span>Australia</span></li><li>Powergent Energy Solutions SDN BHD<span>Malaysia</span></li><li>Powergent Engineering (Thailand) Co., Ltd<span>Thailand</span></li>
      </ul>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact.html">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
