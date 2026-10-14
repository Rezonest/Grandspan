import { useEffect, useRef, useState } from 'react';
import { Link } from '../router.jsx';
import ArrowIcon from './ArrowIcon.jsx';

const DEFAULT_NOTE = "Fields marked * are required. You'll receive a copy of your enquiry by email.";

// Posts natively to FormSubmit, which emails the enquiry and redirects to the thank-you page.
export default function EnquiryForm() {
  const form = useRef(null);
  // Hidden fields are state-driven: re-renders during submit must not reset them.
  const [subject, setSubject] = useState('New project enquiry: grandspan website');
  const [next, setNext] = useState('thank-you.html');
  const [status, setStatus] = useState({ text: DEFAULT_NOTE, error: false });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // FormSubmit needs an absolute redirect URL.
    setNext(new URL('/thank-you.html', location.href).href);
    // Re-enable the button if the visitor returns via the back button.
    const onShow = () => setSending(false);
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  const onSubmit = e => {
    const f = form.current;
    if (!f.checkValidity()) {
      e.preventDefault();
      f.reportValidity();
      setStatus({ text: 'Please complete the required fields.', error: true });
      return;
    }
    if (f.elements._honey.value) { e.preventDefault(); return; }
    const area = f.elements['Area of support'].value;
    const company = f.elements.Company.value.trim();
    const value = 'New project enquiry: ' + area + (company ? ' / ' + company : '');
    f.elements._subject.value = value; // the browser builds the POST body right after this handler
    setSubject(value);
    setStatus({ text: 'Sending your enquiry...', error: false });
    setSending(true);
  };

  return (
    <form ref={form} className="reveal" id="enquiry" action="https://formsubmit.co/info@grandspan.co.uk" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" defaultValue="table" />
      <input type="hidden" name="_next" value={next} id="f-next" />
      <input type="hidden" name="_autoresponse" defaultValue="Thank you for contacting Grandspan Engineering & Projects Limited. We have received your enquiry and a member of our team will review it and reply shortly. A copy of your submission is included below." />
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: '0' }} />
      <div><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="Name" autoComplete="name" required /></div>
      <div><label htmlFor="company">Company</label><input id="company" name="Company" autoComplete="organization" /></div>
      <div><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div><label htmlFor="phone">Phone</label><input id="phone" name="Phone" type="tel" autoComplete="tel" /></div>
      <div><label htmlFor="location">Project location</label><input id="location" name="Project location" placeholder="e.g. Manchester, UK" /></div>
      <div><label htmlFor="area">Area of support</label><select id="area" name="Area of support">
        <option>Telecom infrastructure</option><option>Water &amp; wastewater</option><option>Engineering design &amp; detailing</option><option>Boilers, pressure parts &amp; spares</option><option>Fabrication &amp; equipment supply</option><option>Integrated EPC</option><option>Other</option></select></div>
      <div className="full"><label htmlFor="programme">Target programme</label><input id="programme" name="Target programme" placeholder="e.g. Start Q2 2027, 6 months" /></div>
      <div className="full"><label htmlFor="msg">Scope and key technical requirements <span aria-hidden="true">*</span></label><textarea id="msg" name="Scope and requirements" required minLength="20"></textarea></div>
      <div className="full consent"><input type="checkbox" id="consent" name="Privacy consent" value="Agreed" required /><label htmlFor="consent">I agree that Grandspan may use these details to respond to my enquiry, as described in the <Link to="/privacy-policy.html">Privacy Policy</Link>. <span aria-hidden="true">*</span></label></div>
      <div className="full actions form-actions"><p className={status.error ? 'form-note err' : 'form-note'} id="f-status" role="status">{status.text}</p><button className="btn btn-primary" type="submit" id="f-submit" disabled={sending}>Send enquiry <ArrowIcon /></button></div>
    </form>
  );
}
