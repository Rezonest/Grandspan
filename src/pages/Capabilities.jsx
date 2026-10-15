import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/capabilities",
  "title": "Telecom, Water & Industrial Engineering Capabilities | Grandspan",
  "description": "Telecom and water EPC, plus structural, BIM, energy, marine and process engineering through the Tenaro and Dehu ecosystem.",
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
          "name": "Telecom, Water & Industrial Engineering Capabilities",
          "item": "https://grandspan.co.uk/capabilities"
        }
      ]
    }
  ]
};

export default function Capabilities() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
      <p className="eyebrow light">Industries &amp; Capabilities</p>
      <h1>Engineering for <span className="serif">infrastructure and industry.</span></h1>
      <p className="lede">Telecom and water EPC led by Grandspan. Structural, energy, marine and process engineering through our wider ecosystem. Every scope is built around its technical requirements and operating environment.</p>
      </div></section>
      
      <section style={{paddingTop: "clamp(2rem,4vw,3rem)"}}><div className="wrap">
      <article className="cap" id="telecom">
      <div className="reveal"><p className="cap-num">01 / Grandspan EPC</p><h2>Telecom Infrastructure</h2><p>EPC support for new telecom sites, rooftop installations, strengthening works and network expansion. The work is safe, cost-effective and compliant with the design standards that apply.</p>
      <div className="media"><img src="/assets/telecom-tower.webp" alt="Lattice telecom tower carrying antennas" loading="lazy" width="490" height="640" style={{aspectRatio: "4/3"}} decoding="async" /></div></div>
      <div className="reveal">
      <p className="sub-h">Structures</p>
      <ul className="checklist"><li>Self-supporting lattice towers</li><li>Monopole towers</li><li>Guyed masts</li><li>Rooftop towers and antenna supports</li></ul>
      <p className="sub-h">Engineering &amp; assessment</p>
      <ul className="checklist"><li>UK tower design to BS EN 1993-3-1 and UK National Annex, with a proven track record, with additional compliance with TIA-222-G, TIA-222-H, ANSI, CSA and CSA S37-24.</li><li>Structural analysis to CSA S37-24 and CSA A23.4 where specified</li><li>Stability analysis of existing towers</li><li>Antenna upgrade and loading analysis</li><li>Tower upgrade studies</li><li>Foundation engineering</li><li>Steel and concrete fabrication drawings</li></ul>
      <p>Engineering delivered in accordance with applicable BS EN Standards, Eurocodes EN 1990, EN 1991 and EN 1993, and client-specific telecom standards.</p>
      <p>Electrical design and engineering support using *Modecsoft software, including electrical calculations, SLDs, earthing and associated documentation.</p>
      <p><em>*In collaboration with specialised software partners.</em></p>
      <p className="sub-h">Fabrication &amp; delivery</p>
      <p>Inspection records, as-built documentation, redline updates, and single-site or multi-site handover support.</p>
      
      <ul className="checklist"><li>BS EN 1090 certified fabrication of legs and bracing</li><li>Panel-wise transport and site installation</li><li>Construction and as-built drawings</li><li>Construction Issue Package (CIP) Projects</li><li>GA / PDWG Drawing Preparation, DD Drawings Using Modecsoft Software</li><li>CAB Swap, SUEZ DD Site Documentation</li><li>Small Cell Projects, Including Traffic Control Plans (TCP)</li><li>Single-site or multi-site handover</li></ul>
      <div className="chips"><span className="chip">BS EN 1993-3-1 experience</span><span className="chip">BS EN 1090 certified fabrication</span><span className="chip">TNX Tower</span><span className="chip">GuyMaster</span><span className="chip">TS Tower</span><span className="chip">AutoCAD</span><span className="chip">modecsoft</span></div>
      </div></article>
      
      <article className="cap" id="water">
      <div className="reveal"><p className="cap-num">02 / Grandspan EPC</p><h2>Water &amp; Wastewater</h2><p>An EPC scope for municipal and industrial water systems. It covers abstraction, treatment, storage, distribution and wastewater management.</p>
      <div className="media"><img src="/assets/water-infra.webp" srcSet="/assets/water-infra-800.webp 800w, /assets/water-infra.webp 1400w" sizes="(max-width: 860px) 100vw, 55vw" alt="Water infrastructure spillway structure" loading="lazy" width="1400" height="934" decoding="async" /></div></div>
      <div className="reveal">
      <p className="sub-h">Structures</p>
      <ul className="checklist"><li>Intake wells and pumping stations</li><li>Elevated storage reservoirs (ESR)</li><li>Overhead tanks (OHT)</li><li>Underground reservoirs and clear-water sumps</li><li>Filter houses and pipe-support bridges</li><li>Water and wastewater treatment structures</li></ul>
      <p className="sub-h">Systems &amp; integration</p>
      <ul className="checklist"><li>Filtration, dosing and disinfection</li><li>Biological treatment and sludge handling</li><li>Process water systems</li><li>Civil, mechanical, electrical and control integration</li><li>Commissioning and agreed operational support</li><li>Engineering documentation</li></ul>
      <div className="chips"><span className="chip">Eurocode</span><span className="chip">IS 3370</span><span className="chip">ACI</span></div>
      </div></article>
      </div></section>
      
      <section className="surface" id="engineering"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Engineering design · through our ecosystem</p><h2>Design and detailing <span className="serif">across nine disciplines.</span></h2></div>
      <p className="lede">Tenaro's engineering teams provide multidisciplinary design, analysis and documentation, from concept to construction support.</p></div>
      <div className="svc-grid reveal">
      <div className="svc"><span className="k">03</span><h3>Industrial Structures</h3><p>Industrial buildings, process-plant structures, pipe racks and equipment foundations in STAAD.Pro and finite element models.</p></div>
      <div className="svc"><span className="k">04</span><h3>Structural Steel &amp; Tekla</h3><p>Tekla modelling and fabrication shop drawings, plus design and detailing of PEB warehouses and factories.</p></div>
      <div className="svc"><span className="k">05</span><h3>Building Information Modelling</h3><p>Architectural, structural and MEP BIM, 3D visualisation and rendering, clash detection, model audits, quantity extraction and as-built models.</p></div>
      <div className="svc"><span className="k">06</span><h3>Power &amp; Energy</h3><p>Solar farms, single- and dual-axis trackers, rooftop solar, power-plant structures and duct supports.</p></div>
      <div className="svc"><span className="k">07</span><h3>Port &amp; Marine</h3><p>Jetties, wharves, berths, quay walls, breakwaters, access trestles and navigation channels, plus ship hatch covers to DNV.</p></div>
      <div className="svc"><span className="k">08</span><h3>Sugar &amp; Process Industry</h3><p>Plant expansion and modernisation, utility systems, energy optimisation and distillery support.</p></div>
      <div className="svc"><span className="k">09</span><h3>Bridges &amp; Transmission</h3><p>Railway, truss and pedestrian bridges, transmission line towers and wind turbine structures.</p></div>
      <div className="svc"><span className="k">10</span><h3>Façade &amp; Rebar</h3><p>Aluminium supports for glass façades, rebar detailing using RebarCAD and CADS RC software, bar lists and estimation.</p></div>
      <div className="svc"><span className="k">11</span><h3>Project Engineering</h3><p>Feasibility, basic and detailed engineering, specifications, vendor drawing review and site assistance.</p></div>
      </div>
      <div className="split" style={{marginTop: "clamp(3rem,6vw,5rem)"}}>
      <figure className="reveal"><img src="/assets/staad-model.webp" alt="STAAD.Pro analytical model of an industrial structure" loading="lazy" width="569" height="325" style={{objectPosition: "right center"}} decoding="async" /><figcaption>Analytical model of an industrial structure.</figcaption></figure>
      <div className="stack reveal"><p className="eyebrow">Standards</p><h2 style={{fontSize: "var(--text-xl)"}}>Designed to the codes <span className="serif">of the market.</span></h2>
      <p>Engineers across the group have designed for clients in North America, Europe, Africa and India. Calculations and drawings are produced to the standard the project specifies.</p>
      <div className="chips"><span className="chip">EN 1992</span><span className="chip">EN 1993</span><span className="chip">BS EN 1993-3-1</span><span className="chip">BS EN 1090</span><span className="chip">BS 5950</span><span className="chip">ACI 318</span><span className="chip">AISC</span><span className="chip">CISC</span><span className="chip">CSA A23</span><span className="chip">CSA S37-24</span><span className="chip">IS 456</span><span className="chip">IS 800</span><span className="chip">IS 4651</span><span className="chip">DNV</span></div></div>
      </div>
      </div></section>
      
      
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Fabrication &amp; erection · through Lero Engineering</p><h2>Designed, fabricated <span className="serif">and erected.</span></h2></div>
      <p className="lede">Lero Engineering &amp; Services, part of the Dehu Group, runs a fabrication facility in Chennai. It takes structural packages from drawings through to erection on site.</p></div>
      <div className="gallery reveal">
      <figure><img src="/assets/fab-tower-section.webp" alt="Fabricated telecom tower section in a workshop" loading="lazy" width="307" height="460" decoding="async" /><figcaption>Telecom tower sections<small>Legs, horizontals and bracing, fabricated panel by panel, transported and installed. Representative image.</small></figcaption></figure>
      <figure><img src="/assets/peb-shed.webp" alt="Pre-engineered steel building interior" loading="lazy" width="543" height="344" decoding="async" /><figcaption>PEB structures<small>Warehouses and factories, fabricated, connected and erected on site</small></figcaption></figure>
      <figure><img src="/assets/transmission-tower.webp" alt="Transmission line tower" loading="lazy" width="353" height="459" decoding="async" /><figcaption>Transmission line towers<small>Designed for wind load and conductor sag-tension loading</small></figcaption></figure>
      <figure><img src="/assets/model-wind-cfd.webp" alt="CFD analysis of a wind turbine structure" loading="lazy" width="516" height="382" decoding="async" /><figcaption>Wind turbine structures<small>Site-specific wind design with CFD analysis, plus installation</small></figcaption></figure>
      </div>
      <p className="sub-h" style={{marginTop: "3rem"}}>Engineering models from recent work</p>
      <div className="gallery reveal">
      <figure><img src="/assets/model-bridge.webp" alt="Bowstring girder bridge model" loading="lazy" width="335" height="216" style={{background: "#fff", objectFit: "contain"}} decoding="async" /><figcaption>Bowstring girder bridge<small>Rail and pedestrian bridges to IRS, IRC, EN 1992 and BS 5950</small></figcaption></figure>
      <figure><img src="/assets/model-duct.webp" alt="Duct support structure model" loading="lazy" width="367" height="256" decoding="async" /><figcaption>Duct support structures<small>Chimney ducts designed for ash, wind and seismic loads</small></figcaption></figure>
      <figure><img src="/assets/model-hatch.webp" alt="Ship hatch cover model" loading="lazy" width="482" height="233" decoding="async" /><figcaption>Ship hatch cover<small>Lift-away hatch cover for a 7,500 DWT cargo ship, to DNV</small></figcaption></figure>
      <figure><img src="/assets/tekla-model.webp" alt="Tekla model of an industrial steel frame" loading="lazy" width="474" height="314" decoding="async" /><figcaption>Industrial steel frame<small>Tekla model and fabrication shop drawings</small></figcaption></figure>
      </div>
      </div></section>
      
      <section className="surface tight"><div className="wrap">
      <div className="sec-head reveal" style={{marginBottom: "2rem"}}><div><p className="eyebrow">Technology</p><h2>The software <span className="serif">behind the drawings.</span></h2></div>
      <p className="lede">Analysis, modelling and detailing are carried out in industry-standard tools. Some specialist software work is done with our software partners.</p></div>
      <div className="svc-grid reveal">
      <div className="svc"><span className="k">Analysis</span><h3>Structural analysis</h3><p>STAAD.Pro, finite element modelling and CFD wind analysis.</p></div>
      <div className="svc"><span className="k">Towers</span><h3>Telecom tower design</h3><p>TNX Tower, GuyMaster and TS Tower, for work to CSA S37-24.</p></div>
      <div className="svc"><span className="k">Detailing</span><h3>Steel &amp; rebar detailing</h3><p>Tekla Structures, AutoCAD, RebarCAD and CADS RC.</p></div>
      <div className="svc wide"><span className="k">BIM</span><h3>Coordinated digital models</h3><p>Architectural, structural and MEP BIM using client templates and standards. Includes clash detection, model audits, quantity extraction and as-built models.</p></div>
      <div className="svc"><span className="k">Rebar</span><h3>Bar lists</h3><p>Bar lists issued for manufacturing, with lengths, diameters and bending schedules using Rebar CAD and CAD's RC software.</p></div>
      </div>
      </div></section>
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">UK sectors in focus</p><h2>Where a defined scope <span className="serif">can start a conversation.</span></h2></div>
      <p className="lede">Technical fit and delivery scope are assessed for each enquiry.</p></div>
      <div className="split reveal" style={{alignItems: "start"}}>
      <ul className="checklist one"><li>Food and beverage producers</li><li>Breweries and distilleries</li><li>Chemical and process manufacturers</li><li>Paper and packaging</li><li>Industrial manufacturing sites</li></ul>
      <ul className="checklist one"><li>Telecom operators and tower companies</li><li>Water utilities and their contractors</li><li>Power generation and energy-from-waste</li><li>Industrial heat recovery</li><li>Renewable energy developers</li></ul>
      </div>
      <p className="sub-h" style={{marginTop: "3rem"}}>Sectors the group already serves</p>
      <div className="chips reveal"><span className="chip">Power generation</span><span className="chip">Sugar &amp; distillery</span><span className="chip">Water management</span><span className="chip">Oil &amp; gas</span><span className="chip">Process industries</span><span className="chip">Manufacturing facilities</span><span className="chip">Transport</span><span className="chip">Telecom networks</span><span className="chip">Industrial utilities</span></div>
      <p className="fine">More than 1,000 customers across India and abroad.</p>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
