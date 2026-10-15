import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/manufacturing",
  "title": "Manufacturing & Equipment | Grandspan",
  "description": "Boilers, pressure parts, heat-transfer equipment and heavy fabrication from ASME and IBR certified group factories.",
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
          "name": "Manufacturing & Equipment",
          "item": "https://grandspan.co.uk/manufacturing"
        }
      ]
    }
  ]
};

export default function Manufacturing() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
      <p className="eyebrow light">Manufacturing · through our ecosystem</p>
      <h1>Certified plants. <span className="serif">Proven output.</span></h1>
      <p className="lede">Grandspan clients can call on group factories for boilers, pressure parts, heat-transfer equipment and heavy fabrication. Every package comes with the drawings, materials and inspection records it needs.</p>
      </div></section>
      
      <section><div className="wrap split">
      <figure className="reveal"><img src="/assets/workshop-floor.webp" alt="Manufacturing shop floor with overhead cranes and fabricated components" loading="lazy" width="800" height="336" style={{aspectRatio: "16/9"}} decoding="async" /><figcaption>Fabrication shop with EOT cranes.</figcaption></figure>
      <div className="stack reveal"><p className="eyebrow">Pune facility</p><h2>Built for <span className="serif">heavy work.</span></h2>
      <ul className="checklist"><li>100,000 sq ft site</li><li>35,000 sq ft covered shed</li><li>16 MT EOT cranes</li><li>3 × 14 MT mobile cranes</li><li>SMAW / TIG / MIG / ARC / SAW welding</li><li>Tube bending and CNC/VMC machining</li><li>Radial drills, lathes and bandsaws</li><li>All kinds of NDT testing</li></ul></div>
      </div></section>
      
      <section className="on-dark deep"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Manufacturing capacity</p><h2>Six factories, <span className="serif">one order book.</span></h2></div>
      <p className="lede">Annual capacity across the group, in metric tonnes.</p></div>
      <div className="table-wrap reveal"><table>
      <thead><tr><th>Factory</th><th>Location</th><th className="num">Pressure parts</th><th className="num">Non-pressure parts</th><th className="num">Equipment</th></tr></thead>
      <tbody>
      <tr><td>Tenaro Global EPC Pvt Ltd</td><td>Pune</td><td className="num">5,000</td><td className="num">8,000</td><td className="num">1,200</td></tr>
      <tr><td>Akaya Engineering LLP</td><td>New Delhi</td><td className="num">3,000*</td><td className="num">5,000</td><td className="num">200</td></tr>
      <tr><td>Dehu Engineering &amp; Services</td><td>Chennai</td><td className="num">600</td><td className="num">2,000</td><td className="num">1,200</td></tr>
      <tr><td>Trois Plus Industries</td><td>Ahmedabad</td><td className="num">600</td><td className="num">600</td><td className="num">200</td></tr>
      <tr><td>SourceBridge Solutions</td><td>Hyderabad</td><td className="num">300 (non-IBR)</td><td className="num">300</td><td className="num">100</td></tr>
      <tr><td>Total Energy Engineering &amp; Services</td><td>Mysore</td><td className="num">200 (non-IBR)</td><td className="num">300</td><td className="num">100</td></tr>
      </tbody></table></div>
      <p className="fine">* Under construction. Hyderabad and Mysore pressure-part capacity is non-IBR. Capacity figures are taken from the Tenaro Master Brochure 2026.</p>
      
      <div className="stats reveal" style={{marginTop: "3rem"}}>
      <div className="stat"><b>300,000+</b><span>boiler bends</span></div>
      <div className="stat"><b>100,000+</b><span>bed coils and bed superheaters</span></div>
      <div className="stat"><b>50,000+</b><span>bank tubes</span></div>
      <div className="stat"><b>20,000+</b><span>economiser coils</span></div>
      </div>
      <div className="stats reveal">
      <div className="stat"><b>8,000+</b><span>superheater coils</span></div>
      <div className="stat"><b>600+</b><span>headers</span></div>
      <div className="stat"><b>200+</b><span>waterwall panels</span></div>
      <div className="stat"><b>30,000+</b><span>tonnes of non-pressure parts</span></div>
      </div>
      </div></section>
      
      <section className="surface" id="products"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Products</p><h2>Boilers, pressure parts <span className="serif">and process equipment.</span></h2></div>
      <p className="lede">Equipment is selected and specified around the duty you need and the project specification.</p></div>
      <div className="products reveal">
      <div className="prod"><img src="/assets/package-boiler.webp" alt="Package type shell boiler" loading="lazy" width="256" height="212" decoding="async" /><div>Package boilers<small>0.5–12 TPH, multi-fuel</small></div></div>
      <div className="prod"><img src="/assets/waterwall-panel.webp" alt="Waterwall membrane panel" loading="lazy" width="257" height="257" decoding="async" /><div>Waterwall panels<small>Membrane construction</small></div></div>
      <div className="prod"><img src="/assets/headers-drums.webp" alt="Boiler headers" loading="lazy" width="236" height="236" decoding="async" /><div>Drums &amp; headers<small>Up to 87 kg/cm²(g)</small></div></div>
      <div className="prod"><img src="/assets/tube-bending.webp" alt="Tube bending machine" loading="lazy" width="222" height="283" decoding="async" /><div>Coils &amp; bends<small>Economiser, SH, bed coils</small></div></div>
      <div className="prod"><img src="/assets/welding.webp" alt="Welder fabricating pressure parts" loading="lazy" width="277" height="209" decoding="async" /><div>Heavy fabrication<small>Custom engineered</small></div></div>
      <div className="prod"><img src="/assets/facility-exterior.webp" alt="Group manufacturing facility exterior" loading="lazy" width="800" height="598" decoding="async" /><div>Spares &amp; site services<small>IBR and non-IBR</small></div></div>
      </div>
      
      <div className="svc-grid reveal" style={{marginTop: "2.5rem"}}>
      <div className="svc wide"><span className="k">Cogeneration boilers</span><h3>10 to 150 TPH, up to 87 kg/cm²(g)</h3><p>FBC, travelling grate, dumping grate and pulsating grate designs, plus waste-heat recovery systems. They run on coal, lignite, wood, husk and other biomass, or on waste heat. Benefits include high efficiency, multi-fuel capability, an innovative bed evaporator, better steam purity, and over-bed or under-bed feed.</p></div>
      <div className="svc"><span className="k">Heat transfer</span><h3>Economisers &amp; superheaters</h3><p>Superheaters from 30 to 87 kg/cm²(g), up to 550 °C. Fin-type heat exchangers with serrated, spiral, circular or H-type fins, for waste-heat recovery boilers and hot water and hot air generators. Air preheaters.</p></div>
      <div className="svc"><span className="k">Vessels &amp; tanks</span><h3>Pressure vessels</h3><p>Feed-water heaters, coil heat exchangers, and feed-water, blowdown and flash tanks.</p></div>
      <div className="svc"><span className="k">Auxiliaries</span><h3>Plant equipment</h3><p>ID and FD fans, aerofoil meters, single-flap and multi-louvre dampers, metallic and non-metallic expansion bellows, steam and gas silencers, screw conveyors and bag filters.</p></div>
      <div className="svc"><span className="k">Spares</span><h3>Boiler &amp; ESP spares</h3><p>More than 35 standard spares lines, including nozzles, grate bars, electrodes, insulators, ferrules and access doors.</p></div>
      </div>
      </div></section>
      
      
      <section className="tight"><div className="wrap">
      <div className="sec-head reveal" style={{marginBottom: "2rem"}}><div><p className="eyebrow">Projects</p><h2>On site, <span className="serif">at scale.</span></h2></div>
      <p className="lede">Pressure-part fabrication and erection on boiler and power-plant projects delivered by the group.</p></div>
      <div className="gallery three reveal">
      <figure><img src="/assets/proj-boiler-structure.webp" alt="Boiler pressure-part structure assembled in steel framing" loading="lazy" width="208" height="185" decoding="async" /><figcaption>Boiler structure assembly<small>Pressure parts and steel framing</small></figcaption></figure>
      <figure><img src="/assets/proj-panel-erection.webp" alt="Waterwall panel being lifted into position on site" loading="lazy" width="181" height="201" decoding="async" /><figcaption>Waterwall panel erection<small>Crane lift into the boiler structure</small></figcaption></figure>
      <figure><img src="/assets/proj-site-assembly.webp" alt="Panels laid out for assembly at a power-plant site" loading="lazy" width="181" height="201" decoding="async" /><figcaption>Site assembly<small>Panels staged ready for erection</small></figcaption></figure>
      </div>
      
      <details className="more reveal"><summary>Boiler and ESP spares we supply (IBR and non-IBR)</summary><div>
      <ul className="spares">
      <li>Scalloped plates for SH coils</li><li>Shields for bed, superheater and economiser coils</li><li>Grate bars for TG, DG and PG</li><li>Air heater tubes and tube sheets</li><li>Air nozzles for AFBC boilers</li><li>Air heater assemblies</li><li>Airbox assemblies and distributor plates</li><li>Mixing nozzles</li><li>Fuel nozzles and caps</li><li>Air nozzles for CFBC boilers</li><li>Pocket feeders and rotors</li><li>Drag chains and feeders</li><li>Emitting electrodes</li><li>Collecting electrodes</li><li>Ash feeders</li><li>Impeller and shaft assemblies for PA, SA, ID and FD fans</li><li>Cooling fans</li><li>Seal air fans</li><li>Bushing, support and shaft insulators</li><li>MDC cones and inlet/outlet guide vanes</li><li>SS ferrules</li><li>Silencers</li><li>Thermowells</li><li>Manhole doors</li><li>Clinker cleaning doors</li><li>Expansion bellows</li><li>Dampers</li><li>Top and bottom suspension frames</li><li>GD screens</li><li>Base frames for fans and pumps</li><li>Water treatment spares and consumables</li><li>Water treatment plant and boiler chemicals</li>
      </ul></div></details>
      
      <details className="more reveal"><summary>Materials of construction</summary><div className="mat">
      <div><h4>Tubes</h4><p>SA 210 Gr A1 and Gr C, BS 3059 Gr 320 ERW and Gr 360 seamless, SA 213 T11, T22, T91, TP 304 H and TP 347 H.</p></div>
      <div><h4>Plates, drums and headers</h4><p>SA 515 Gr 70, SA 516 Gr 70, SA 106 Gr B, SA 335 P11 and P22, IS 2062, and SA 240 Gr 304. Drums up to 75 mm thick.</p></div>
      <div><h4>Studs, ferrules and fins</h4><p>SAE 1018, and SS 304, 310 and 316. Fins in IS 2062, 5 to 6 mm thick.</p></div>
      </div></details>
      </div></section>
      <section><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Business verticals</p><h2>From a single spare <span className="serif">to a complete plant.</span></h2></div></div>
      <div className="steps reveal">
      <div className="step"><span className="n">i</span><h3>Pressure-part spares</h3><p>Certified IBR spares for existing boilers and power plants, to keep operations running.</p></div>
      <div className="step"><span className="n">ii</span><h3>Boiler &amp; power-plant EPC</h3><p>End-to-end engineering, procurement and construction for boiler and power projects.</p></div>
      <div className="step"><span className="n">iii</span><h3>Design &amp; supply</h3><p>Custom-engineered products and heavy fabrication built to the client's specification.</p></div>
      <div className="step"><span className="n">iv</span><h3>Site services &amp; trading</h3><p>Skilled site work, plus sourcing of engineering products and raw materials.</p></div>
      </div>
      <p className="fine" style={{marginTop: "2rem"}}>Manufacturing, certification and capacity sit with group companies of Tenaro Global EPC and the Dehu Group. Grandspan coordinates scope, documentation and the client interface for UK and international enquiries.</p>
      <p className="fine">For supply to Great Britain, pressure equipment is placed on the market under PE(S)R 2016 and structural steelwork under BS EN 1090, with UKCA or CE marking. <Link to="/how-we-work#uk-compliance" style={{color: "var(--navy-700)"}}>See UK compliance</Link>.</p>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
