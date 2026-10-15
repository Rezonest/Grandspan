import { Link } from '../router.jsx';
import ArrowIcon from './ArrowIcon.jsx';

export default function CtaBand() {
  return (
    <section className="cta tight"><div className="wrap">
      <h2>Have a scope in mind? <span className="serif">Send us the brief.</span></h2>
      <div className="actions"><Link className="btn btn-light" to="/contact">Raise an enquiry <ArrowIcon /></Link><a className="btn btn-ghost" href="mailto:info@grandspan.co.uk" style={{ borderColor: 'rgba(255,255,255,.35)', color: '#fff' }}>info@grandspan.co.uk</a></div>
    </div></section>
  );
}
