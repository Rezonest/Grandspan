import { Link } from '../router.jsx';

export default function Footer() {
  return (
    <footer className="site-footer"><div className="wrap">
      <div className="f-grid">
        <div className="f-brand"><img src="/assets/grandspan-logo-sm.webp" alt="Grandspan" width="132" height="44" loading="lazy" decoding="async" /><p>UK-based engineering and project delivery, connected to the Tenaro Global EPC and Dehu Group engineering and manufacturing ecosystem.</p></div>
        <div><h2>Explore</h2><ul><li><Link to="/about.html">About Us</Link></li><li><Link to="/about.html#leadership">Leadership</Link></li><li><Link to="/capabilities.html">Capabilities</Link></li><li><Link to="/how-we-work.html">How We Work</Link></li><li><Link to="/manufacturing.html">Manufacturing</Link></li><li><Link to="/network.html">Global Network</Link></li><li><Link to="/contact.html">Contact</Link></li></ul></div>
        <div><h2>Capabilities</h2><ul><li><Link to="/capabilities.html#telecom">Telecom Infrastructure</Link></li><li><Link to="/capabilities.html#water">Water &amp; Wastewater</Link></li><li><Link to="/capabilities.html#engineering">Engineering Design</Link></li><li><Link to="/manufacturing.html">Power &amp; Steam Systems</Link></li></ul></div>
        <div><h2>Contact</h2><ul><li><a href="mailto:info@grandspan.co.uk">info@grandspan.co.uk</a></li><li><a href="mailto:subaram@grandspan.co.uk">subaram@grandspan.co.uk</a></li><li><a href="mailto:rishi@grandspan.co.uk">rishi@grandspan.co.uk</a></li><li>20 Wenlock Road, London N1 7GU</li></ul></div>
      </div>
      <p className="f-indep">Grandspan Engineering &amp; Projects Limited is an independent company registered in England and Wales. It works in collaboration with Tenaro Global EPC Private Limited, Dehu Group companies and Lero Engineering Services. These are separate legal entities, and Grandspan does not own them or their facilities. Manufacturing, fabrication and certain engineering services described on this website are carried out by these companies, which hold their own certifications.</p>
      <div className="f-legal"><span>Grandspan Engineering &amp; Projects Limited · Company number 17483898 · Registered in England and Wales · Registered office: 20 Wenlock Road, London N1 7GU</span><span><Link to="/privacy-policy.html">Privacy Policy</Link> · <Link to="/cookie-policy.html">Cookie Policy</Link> · <Link to="/about.html#relationships">Company Status</Link> · &copy; 2026 Grandspan Engineering &amp; Projects Limited</span></div>
    </div></footer>
  );
}
