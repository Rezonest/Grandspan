import WorldMap from '../components/WorldMap.jsx';
import ArrowIcon from '../components/ArrowIcon.jsx';
import { Link } from '../router.jsx';

export const meta = {
  "path": "/network",
  "title": "Global Network | Grandspan",
  "description": "Grandspan is an independent UK company working with the Tenaro Global EPC network, with locations in Germany, Singapore, Australia, Kenya, Ghana and Guatemala.",
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
          "name": "Global Network",
          "item": "https://grandspan.co.uk/network"
        }
      ]
    }
  ]
};

export default function Network() {
  return (
    <>
      <section className="page-hero deep" style={{background: "var(--navy-900)"}}><div className="wrap">
      <p className="eyebrow light">Global network</p>
      <h1>Building a global presence. <span className="serif">Creating local impact.</span></h1>
      <p className="lede">Grandspan is an independent UK company working in collaboration with the Tenaro Global EPC network. Every location pairs local companies with the group's engineering and manufacturing base in India.</p>
      </div></section>
      
      <section className="on-dark deep" style={{paddingTop: "0"}}><div className="wrap">
      <div className="map-shell reveal"><WorldMap />
      <div className="map-legend"><span><i className="lg-hq"></i>Group head office, Pune</span><span><i className="lg-est"></i>Established</span><span><i className="lg-jv"></i>Joint venture agreed</span><span><i className="lg-up"></i>Upcoming</span></div></div>
      
      <div className="stats reveal" style={{marginTop: "3rem"}}>
      <div className="stat"><b>6</b><span>international locations established</span></div>
      <div className="stat"><b>1</b><span>joint venture agreed</span></div>
      <div className="stat"><b>4</b><span>more locations planned</span></div>
      <div className="stat"><b>15</b><span>cities in India with group offices or factories</span></div>
      </div>
      
      <div className="loc-grid reveal">
      <div className="loc self"><p className="st">Established · UK office</p><p className="city">London, United Kingdom</p><p className="co">Grandspan Engineering &amp; Projects Limited</p></div>
      <div className="loc"><p className="st">Established</p><p className="city">Frankfurt, Germany</p><p className="co">Tenaro Global UG</p></div>
      <div className="loc"><p className="st">Established</p><p className="city">Singapore</p><p className="co">Fusion EPC Global Pte. Ltd.</p></div>
      <div className="loc"><p className="st">Established</p><p className="city">Perth, Australia</p><p className="co">Apex Projects and Services Pty Ltd</p></div>
      <div className="loc"><p className="st">Established</p><p className="city">Nairobi, Kenya</p><p className="co">Tekno Vyote Engineering Solutions Limited</p></div>
      <div className="loc"><p className="st">Established</p><p className="city">Accra, Ghana</p><p className="co">Gold Coast Engineering &amp; Projects Limited</p></div>
      <div className="loc jv"><p className="st">Joint venture agreed</p><p className="city">Guatemala City, Guatemala</p><p className="co">Stratech</p></div>
      <div className="loc up"><p className="st">Upcoming</p><p className="city">Abu Dhabi, UAE</p><p className="co">Middle East</p></div>
      <div className="loc up"><p className="st">Upcoming</p><p className="city">Orlando, USA · Ottawa, Canada · Brasília, Brazil</p><p className="co">The Americas</p></div>
      </div>
      </div></section>
      
      
      <section className="surface"><div className="wrap">
      <div className="sec-head reveal"><div><p className="eyebrow">Home base</p><h2>Offices and factories <span className="serif">across India.</span></h2></div>
      <p className="lede">The group is run from its head office in Pune and has offices and factories in 15 cities.</p></div>
      <div className="split reveal" style={{alignItems: "start"}}>
      <div><p className="sub-h" style={{marginTop: "0"}}>Offices and factories</p><ul className="checklist"><li>Pune (head office)</li><li>Chennai</li><li>Ahmedabad</li><li>New Delhi</li><li>Hyderabad</li><li>Mysore</li><li>Tiruchirappalli</li><li>Bangalore</li></ul></div>
      <div><p className="sub-h" style={{marginTop: "0"}}>Offices</p><ul className="checklist"><li>Mumbai</li><li>Kolkata</li><li>Jharsuguda</li><li>Visakhapatnam</li><li>Rajahmundry</li><li>Coimbatore</li><li>Cochin</li></ul></div>
      </div>
      <p className="fine">Office and factory designations are based on the brochure map and may need confirming.</p>
      </div></section>
      
      <section className="tight"><div className="wrap">
      <div className="sec-head reveal" style={{marginBottom: "2rem"}}><div><p className="eyebrow">Future targets</p><h2>Where the network <span className="serif">goes next.</span></h2></div>
      <p className="lede">Markets named in the group's international plan, in addition to the established and upcoming offices above.</p></div>
      <div className="chips reveal"><span className="chip">Bangkok, Thailand</span><span className="chip">Kuala Lumpur, Malaysia</span><span className="chip">Manila, Philippines</span><span className="chip">Jakarta, Indonesia</span><span className="chip">Colombo, Sri Lanka</span><span className="chip">São Paulo, Brazil</span><span className="chip">Middle East</span></div>
      </div></section>
      <section><div className="wrap split">
      <div className="stack reveal"><p className="eyebrow">Why it matters</p><h2>Local partners. <span className="serif">Shared capability.</span></h2>
      <p className="lede">For UK clients, the network gives one contract interface in London. Behind it sit design teams, fabrication plants and site resources that are already working across several continents.</p>
      <ul className="checklist one"><li>Engineering designed to UK, European, North American and African codes</li><li>Fabrication planned around international logistics</li><li>Partner presence for multi-country programmes</li></ul></div>
      <figure className="reveal"><img src="/assets/port-marine.webp" srcSet="/assets/port-marine-800.webp 800w, /assets/port-marine.webp 1400w" sizes="(max-width: 860px) 100vw, 50vw" alt="Container port and marine infrastructure from above" loading="lazy" width="1400" height="934" decoding="async" /></figure>
      </div></section>
      <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{borderColor: "rgba(255,255,255,.35)", color: "#fff"}}>info@grandspan.co.uk</a></div>
      </div></section>
    </>
  );
}
