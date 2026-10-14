import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/",
  "title": "Grandspan Engineering & Projects | UK Engineering & EPC Delivery",
  "description": "UK-based engineering and EPC delivery for telecom, water and industrial infrastructure, connected to the Tenaro Global EPC and Dehu Group manufacturing ecosystem.",
  "robots": "index,follow,max-image-preview:large",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://grandspan.co.uk/#organization",
      "name": "Grandspan Engineering & Projects Limited",
      "alternateName": "Grandspan",
      "url": "https://grandspan.co.uk/",
      "logo": "https://grandspan.co.uk/assets/grandspan-logo-sm.png",
      "image": "https://grandspan.co.uk/assets/og-image.jpg",
      "description": "UK-based engineering and project delivery company providing engineering, procurement and construction support for telecom, water and industrial infrastructure.",
      "email": "info@grandspan.co.uk",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "Companies House number",
        "value": "17483898"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Wenlock Road",
        "addressLocality": "London",
        "postalCode": "N1 7GU",
        "addressCountry": "GB"
      },
      "areaServed": [
        "GB",
        "Worldwide"
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Suthakaran Subaram",
          "jobTitle": "Director",
          "workLocation": {
            "@type": "Place",
            "name": "London, United Kingdom"
          }
        },
        {
          "@type": "Person",
          "name": "Rishi Kasiraj",
          "jobTitle": "Director",
          "workLocation": {
            "@type": "Place",
            "name": "India"
          }
        }
      ],
      "knowsAbout": [
        "Telecom tower engineering",
        "Water and wastewater EPC",
        "Structural engineering",
        "BIM",
        "Boiler pressure parts",
        "Industrial fabrication"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@grandspan.co.uk",
        "areaServed": "GB",
        "availableLanguage": [
          "en"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Grandspan Engineering & Projects",
      "url": "https://grandspan.co.uk/",
      "publisher": {
        "@id": "https://grandspan.co.uk/#organization"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <section className="hero"><div className="hero-grid">
      <div className="hero-copy">
      <p className="eyebrow light">Grandspan Engineering &amp; Projects Limited · London</p>
      <h1>Global Engineering. <span className="serif">Integrated Projects.</span></h1>
      <p className="lede">UK-based EPC delivery for telecom and water infrastructure, backed by the engineering design teams and certified manufacturing plants of Tenaro Global EPC and the Dehu Group.</p>
      <div className="actions"><Link className="btn btn-light" to="/capabilities.html">Explore capabilities <ArrowIcon /></Link><Link className="btn btn-ghost" to="/contact.html">Discuss your project</Link></div>
      </div>
      <div className="hero-media"><img src="/assets/grandspan-workshop-hero.webp" srcSet="/assets/grandspan-workshop-hero-800.webp 800w, /assets/grandspan-workshop-hero.webp 1086w" sizes="(max-width: 900px) 100vw, 43vw" alt="Fabrication workshop with heavy steel components" width="1200" height="1600" fetchPriority="high" />
      <div className="hero-tag"><strong>Six factories. One coordinated scope.</strong>Engineering and fabrication capacity in Pune, Chennai, Ahmedabad, New Delhi, Hyderabad and Mysore.</div></div>
      </div></section>
      
      <section className="on-dark deep tight"><div className="wrap">
      <div className="stats">
      <div className="stat"><b>1000+</b><span>customers served across India and abroad</span></div>
      <div className="stat"><b>30,000+</b><span>tonnes of general and non-pressure parts supplied</span></div>
      <div className="stat"><b>6,700+</b><span>tonnes a year of pressure-part capacity in operation</span></div>
      <div className="stat"><b>6</b><span>international locations established, with 4 more planned</span></div>
      </div>
      <p className="stats-note">Figures relate to the wider Tenaro Global EPC and Dehu Group ecosystem that Grandspan works with.</p>
      </div></section>
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Industries &amp; capabilities</p><h2>Infrastructure we deliver. <span className="serif">Industry we support.</span></h2></div>
      <p className="lede">Grandspan leads telecom and water EPC scopes from London. For power, steam and process work, we bring in the design and manufacturing depth of our wider ecosystem.</p></div>
      <div className="mosaic">
      <Link className="tile t-7 t-tall reveal" to="/capabilities.html#telecom"><img src="/assets/sector-telecom.webp" srcSet="/assets/sector-telecom-800.webp 800w, /assets/sector-telecom.webp 1536w" sizes="(max-width: 860px) 100vw, 58vw" alt="" loading="lazy" width="1536" height="1024" decoding="async" /><span className="tag">Grandspan EPC</span><h3>Telecom Infrastructure</h3><p>Lattice towers, monopoles, guyed masts and rooftop structures, designed to BS EN 1993-3-1 for UK sites and delivered through to as-built handover.</p></Link>
      <Link className="tile t-5 t-tall reveal" to="/capabilities.html#water"><img src="/assets/sector-water.webp" srcSet="/assets/sector-water-800.webp 800w, /assets/sector-water.webp 1536w" sizes="(max-width: 860px) 100vw, 42vw" alt="" loading="lazy" width="1536" height="1024" decoding="async" /><span className="tag">Grandspan EPC</span><h3>Water &amp; Wastewater</h3><p>Intakes, pumping stations, reservoirs, elevated storage tanks and treatment structures.</p></Link>
      <Link className="tile t-4 reveal" to="/manufacturing.html"><img src="/assets/sector-power.webp" srcSet="/assets/sector-power-800.webp 800w, /assets/sector-power.webp 1536w" sizes="(max-width: 860px) 100vw, 33vw" alt="" loading="lazy" width="1536" height="1024" decoding="async" /><span className="tag">Ecosystem</span><h3>Power Generation</h3><p>Boiler and power-plant EPC, pressure parts and spares.</p></Link>
      <Link className="tile t-4 reveal" to="/manufacturing.html#products"><img src="/assets/sector-heating.webp" srcSet="/assets/sector-heating-800.webp 800w, /assets/sector-heating.webp 1536w" sizes="(max-width: 860px) 100vw, 33vw" alt="" loading="lazy" width="1536" height="1024" decoding="async" /><span className="tag">Ecosystem</span><h3>Heating &amp; Steam</h3><p>Package and cogeneration boilers, economisers and heat-recovery equipment.</p></Link>
      <Link className="tile t-4 reveal" to="/capabilities.html#engineering"><img src="/assets/sector-process.webp" srcSet="/assets/sector-process-800.webp 800w, /assets/sector-process.webp 1536w" sizes="(max-width: 860px) 100vw, 33vw" alt="" loading="lazy" width="1536" height="1024" decoding="async" /><span className="tag">Ecosystem</span><h3>Process &amp; Structures</h3><p>Industrial structures, BIM, Tekla detailing, port, marine and solar design.</p></Link>
      </div>
      </div></section>
      
      <section className="surface"><div className="wrap split">
      <div className="stack reveal">
      <p className="eyebrow">Our approach</p>
      <h2>From requirement <span className="serif">to handover.</span></h2>
      <p className="lede">Engineering, procurement, fabrication and construction support, organised around a clearly defined scope.</p>
      <p>Design responsibilities, applicable codes, inspection requirements and acceptance criteria are agreed at the start of each assignment. Engineering teams work to Eurocode, BS, ACI, AISC, CISC, CSA and IS standards, so drawings and calculations fit the market where the asset is built.</p>
      <p><Link to="/how-we-work.html" style={{color: "var(--navy-700)", fontWeight: "600"}}>See how we manage procurement, quality and logistics →</Link></p>
      <div className="chips"><span className="chip">EN 1992 / EN 1993</span><span className="chip">BS 5950</span><span className="chip">ACI 318</span><span className="chip">AISC</span><span className="chip">BS EN 1993-3-1</span><span className="chip">BS EN 1090</span><span className="chip">CSA S37-24</span><span className="chip">CSA A23</span><span className="chip">IS 800 / IS 456</span><span className="chip">DNV</span></div>
      </div>
      <figure className="reveal"><img src="/assets/tekla-model.webp" alt="3D Tekla structural model of a multi-storey industrial steel frame" loading="lazy" width="474" height="314" decoding="async" /><figcaption>Tekla structural model of an industrial steel frame, produced for shop drawings and fabrication.</figcaption></figure>
      </div></section>
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">A connected ecosystem</p><h2>One point of contact in London. <span className="serif">A full supply chain behind it.</span></h2></div>
      <p className="lede">You deal with Grandspan in the UK. Behind us are Tenaro's engineering teams and the Dehu Group's certified fabrication plants.</p></div>
      <div className="eco reveal">
      <div className="eco-node"><div className="eco-logo"><img src="/assets/dehu-logo.webp" alt="Dehu Group" width="512" height="237" /></div><span className="role">Manufacturing heritage</span><h3>Dehu Group</h3><p>A diversified industrial group spanning heavy manufacturing, EPC, O&amp;M, consultancy and logistics.</p><span className="eco-arrow" aria-hidden="true"><ArrowIcon /></span></div>
      <div className="eco-node"><div className="eco-logo"><img src="/assets/tenaro-logo.png" alt="Tenaro Global EPC" width="522" height="126" /></div><span className="role">Engineering &amp; international EPC</span><h3>Tenaro Global EPC</h3><p>Multidisciplinary design, detailing and project engineering from its head office in Pune, India.</p><span className="eco-arrow" aria-hidden="true"><ArrowIcon /></span></div>
      <div className="eco-node self"><div className="eco-logo"><img src="/assets/grandspan-logo-sm.webp" alt="Grandspan" width="156" height="52" style={{background: "#fff", padding: "6px 10px", borderRadius: "4px", maxHeight: "48px"}} /></div><span className="role">UK delivery</span><h3>Grandspan Engineering &amp; Projects</h3><p>London-based project coordination, client interface and telecom and water EPC delivery.</p></div>
      </div>
      <div className="actions" style={{marginTop: "2rem"}}><Link className="btn btn-ghost" to="/about.html">How the ecosystem works <ArrowIcon /></Link></div>
      </div></section>
      
      <section className="surface tight"><div className="wrap">
      <div className="sec-head reveal" style={{marginBottom: "2rem"}}><div><p className="eyebrow">Credentials</p><h2>Certified to build <span className="serif">pressure equipment.</span></h2></div>
      <p className="lede">The group holds ASME and IBR authorisations, BS EN 1090 certification for structural steel, and ISO quality, environmental and safety certifications.</p></div>
      <div className="creds reveal">
      <div className="cred"><b>ASME “S”</b><span>Power boilers</span></div>
      <div className="cred"><b>ASME “U”</b><span>Pressure vessels</span></div>
      <div className="cred"><b>ASME “R”</b><span>Repair and alteration</span></div>
      <div className="cred"><b>IBR</b><span>Class 1 and Special Class pressure parts</span></div>
      <div className="cred"><b>ISO 9001:2015</b><span>Quality management</span></div>
      <div className="cred"><b>ISO 14001:2015</b><span>Environmental management</span></div>
      <div className="cred"><b>ISO 45001:2018</b><span>Occupational health and safety</span></div>
      <div className="cred"><b>NDT</b><span>All kinds of non-destructive testing</span></div>
      <div className="cred"><b>BS EN 1090-1</b><span>Structural steel fabrication, for UKCA or CE marking</span></div>
      <div className="cred"><b>BS EN 1993-3-1</b><span>Proven UK tower and mast design</span></div>
      </div>
      <p className="fine">Certifications and design experience are held by collaborating group companies, not by Grandspan. <Link to="/about.html#relationships" style={{color: "inherit"}}>About our company status</Link>.</p>
      <p className="fine">ASME, IBR and ISO certifications are held by Dehu Engineering (India) Private Limited, the sister company of Tenaro Global EPC Private Limited. BS EN 1090 certification is held within the group. For supply to Great Britain, see <Link to="/how-we-work.html#uk-compliance" style={{color: "inherit"}}>how we handle UK compliance</Link> (BS EN 1090 and PE(S)R 2016).</p>
      </div></section>
      
      <section className="on-dark deep"><div className="wrap split">
      <div className="stack reveal">
      <p className="eyebrow">Global network</p>
      <h2>From India <span className="serif">to the world.</span></h2>
      <p className="lede">Grandspan is an independent UK company working with an international network of collaborating companies in Germany, Singapore, Australia, Kenya and Ghana.</p>
      <p>There is a joint venture agreed in Guatemala, and new offices planned in the UAE, the USA, Canada and Brazil.</p>
      <div className="actions"><Link className="btn btn-light" to="/network.html">View the network <ArrowIcon /></Link></div>
      </div>
      <figure className="reveal"><img src="/assets/group-team.webp" alt="Group engineering and manufacturing team in front of their facility" loading="lazy" width="680" height="454" decoding="async" /><figcaption style={{color: "rgba(255,255,255,.6)"}}>The group's engineering and manufacturing team.</figcaption></figure>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact.html">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
