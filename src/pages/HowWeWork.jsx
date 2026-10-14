import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/how-we-work.html",
  "title": "How We Work | Grandspan",
  "description": "Strategy, project lifecycle, procurement, quality, fulfilment and logistics at Grandspan and its engineering ecosystem.",
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
          "name": "How We Work",
          "item": "https://grandspan.co.uk/how-we-work.html"
        }
      ]
    }
  ]
};

export default function HowWeWork() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
      <p className="eyebrow light">How We Work</p>
      <h1>Strategy, supply chain <span className="serif">and fulfilment.</span></h1>
      <p className="lede">How Grandspan and its ecosystem take a scope from first enquiry through procurement, manufacture, logistics and site work to after-sales support.</p>
      </div></section>
      
      <section className="on-dark"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Strategy</p><h2>One country at a time. <span className="serif">One partnership at a time.</span></h2></div>
      <p className="lede">The network grows through local companies with real presence in each market. Each one is backed by the group's engineering and manufacturing base.</p></div>
      <div className="pillars reveal">
      <div><span className="k">Global vision</span><h3>Connected engineering</h3><p>Engineering solutions that connect markets, with one standard of design and documentation.</p></div>
      <div><span className="k">Local partnerships</span><h3>Strong local partners</h3><p>Strong partners, local presence and shared success in each country.</p></div>
      <div><span className="k">Sustainable growth</span><h3>Long-term value</h3><p>Creating opportunities, generating employment and building long-term value.</p></div>
      <div><span className="k">One journey</span><h3>Measured expansion</h3><p>One country, one partnership and one opportunity at a time.</p></div>
      </div>
      </div></section>
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Product &amp; project lifecycle</p><h2>Six stages, <span className="serif">one accountable team.</span></h2></div>
      <p className="lede">Every equipment or project package moves through the same six stages.</p></div>
      <div className="lifecycle reveal">
      <div><span className="n">01</span><h3>Selection</h3><p>A client-focused approach. The product is chosen to suit your requirement.</p></div>
      <div><span className="n">02</span><h3>Design</h3><p>Detailed design to meet the requirement and exceed expectations on quality.</p></div>
      <div><span className="n">03</span><h3>Optimisation</h3><p>Engineering for the most efficient and cost-effective solution.</p></div>
      <div><span className="n">04</span><h3>Manufacturing</h3><p>Built in certified group factories to the agreed specification.</p></div>
      <div><span className="n">05</span><h3>Installation &amp; commissioning</h3><p>Site support tailored to each project's requirements.</p></div>
      <div><span className="n">06</span><h3>After-sales service</h3><p>Ongoing support, spares and O&amp;M after handover.</p></div>
      </div>
      </div></section>
      
      <section className="surface"><div className="wrap">
      <article className="cap" style={{borderTop: "0", paddingTop: "0"}}>
      <div className="reveal"><p className="cap-num">Procurement &amp; supply chain</p><h2>Sourcing with <span className="serif">technical oversight.</span></h2><p>Procurement is run by dedicated outsourcing and project procurement teams. A sourcing company within the group, and an established network of raw material suppliers, support them.</p></div>
      <div className="reveal"><ul className="checklist"><li>Procurement support and vendor coordination</li><li>Vendor drawing review</li><li>Technical specifications for enquiries</li><li>Trading of engineering products and raw materials</li><li>Steel, tubes, plates and fittings to code</li><li>Outsourcing across multiple group workshops</li><li>Material traceability for IBR and ASME work</li><li>Supply packaged to each client's specification</li></ul></div>
      </article>
      <article className="cap">
      <div className="reveal"><p className="cap-num">Quality &amp; inspection</p><h2>Inspected, documented, <span className="serif">certified.</span></h2><p>Quality is built into fabrication, not checked at the end. Inspection records and certification documents are agreed with the client for each package.</p></div>
      <div className="reveal"><ul className="checklist"><li>Dedicated QA/QC lead with 16+ years' experience</li><li>All kinds of NDT testing</li><li>Third-party inspection through a group company</li><li>IBR documentation and formalities</li><li>ASME S, U and R authorisations, and BS EN 1090</li><li>ISO 9001, ISO 14001 and ISO 45001</li><li>Model audits and design reviews</li><li>As-built documentation at handover</li></ul></div>
      </article>
      <article className="cap">
      <div className="reveal"><p className="cap-num">Fulfilment &amp; logistics</p><h2>From factory floor <span className="serif">to site.</span></h2><p>Fabrication is planned around how components will travel and be erected. Telecom towers are fabricated panel by panel and section by section, then transported and installed on site. International logistics are handled by an experienced marketing and logistics team.</p></div>
      <div className="reveal"><ul className="checklist"><li>Shop assembly to reduce site work</li><li>Panel-wise and section-wise dispatch</li><li>International marketing and logistics team</li><li>16 MT EOT and 14 MT mobile cranes for handling</li><li>Site erection and installation teams</li><li>Construction and site engineering support</li><li>Logistics capability within the Dehu Group</li><li>Site services for maintenance and repair</li></ul></div>
      </article>
      </div></section>
      
      
      <section className="surface" id="uk-compliance"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">UK compliance</p><h2>Built to UK rules, <span className="serif">not just to international codes.</span></h2></div>
      <p className="lede">When work is supplied to Great Britain, we plan the compliance route at the start. That covers how the package will be designed, certified and marked before anything is manufactured.</p></div>
      <div className="comp reveal">
      <article><span className="std">Structural steelwork</span><h3>BS EN 1090 · UKCA or CE marking</h3>
      <p>Structural steel components placed on the GB market are marked to BS EN 1090-1. Fabrication within the group is <strong>BS EN 1090 certified</strong>, so UK steelwork packages can be supplied with UKCA or CE marking up to the certified execution class.</p>
      <ul><li>Execution class set at design stage, to BS EN 1090-2</li><li>Fabrication in the group's BS EN 1090 certified facility</li><li>Declaration of Performance with every package</li><li>Welding procedures, welder qualifications and NDT records</li><li>Material certificates and traceability</li></ul></article>
      <article><span className="std">Pressure equipment</span><h3>PE(S)R 2016 · UKCA or CE marking</h3>
      <p>Boilers, vessels and pressure parts above 0.5 bar are covered by the Pressure Equipment (Safety) Regulations 2016. Our ASME and IBR manufacturing experience supports the design and build, and conformity assessment is arranged for each order.</p>
      <ul><li>Hazard category and conformity route confirmed per item</li><li>Assessment through a UK Approved Body or EU Notified Body</li><li>Technical file and Declaration of Conformity</li><li>UKCA or CE marking as the client requires</li><li>Harmonised standards (e.g. EN 12952, EN 13445) where specified</li></ul></article>
      <article><span className="std">Telecom towers &amp; masts</span><h3>BS EN 1993-3-1 · UK National Annex</h3>
      <p>Engineers in the group have <strong>proven experience designing to BS EN 1993-3-1</strong>, Eurocode 3 Part 3-1, and its UK National Annex, which replaced the BS 8100 series. UK lattice towers, monopoles and guyed masts are designed to it. CSA S37-24 and other codes are used where a project or market calls for them.</p>
      <ul><li>Wind actions to BS EN 1991-1-4 and UK National Annex</li><li>Foundations to BS EN 1997</li><li>Antenna loading and upgrade assessments</li><li>Reliability class agreed with the operator</li><li>BS EN 1090 certified fabrication for UK supply</li></ul></article>
      </div>
      <p className="fine">Certificate details, including execution class, certifying body and validity, are available on request and confirmed with every proposal. Since 2023–24 the UK government has continued to recognise CE marking alongside UKCA for these product areas. We follow current GOV.UK guidance at the time of supply.</p>
      </div></section>
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Ways to engage</p><h2>Choose the scope <span className="serif">that fits.</span></h2></div>
      <p className="lede">Design responsibilities, applicable standards, inspection requirements and acceptance criteria are agreed for each assignment.</p></div>
      <div className="steps reveal">
      <div className="step"><span className="n">A</span><h3>Engineering only</h3><p>Design, analysis, detailing, BIM and documentation for your own delivery team.</p></div>
      <div className="step"><span className="n">B</span><h3>Supply</h3><p>Equipment, pressure parts, spares or fabricated steelwork, built to your drawings or ours.</p></div>
      <div className="step"><span className="n">C</span><h3>Supply and install</h3><p>Fabrication with installation, erection and commissioning support on site.</p></div>
      <div className="step"><span className="n">D</span><h3>Integrated EPC</h3><p>Engineering, procurement and construction under one coordinated scope.</p></div>
      </div>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact.html">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
