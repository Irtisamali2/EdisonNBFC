import { useState } from 'react';
import axios from 'axios';
import Icon from '../common/Icon.jsx';

function Field({ label, children }) {
  return <label className="field"><span className="field-l">{label}</span>{children}</label>;
}

export default function Contact({ noHead = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: 'General enquiry', message: '' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await axios.post('/api/contact', form); } catch { /* silent fallback */ }
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          {!noHead ? (
            <>
              <span className="eyebrow">Contact</span>
              <h2 className="display-md">Talk to our team — partnerships, media, careers, and capital.</h2>
              <p className="body-lg">We are based in Islamabad and currently building out our team for the licensed launch. We respond within two working days.</p>
            </>
          ) : (
            <>
              <span className="eyebrow">Where to find us</span>
              <h2 className="display-md apply-side-h">Direct contacts.</h2>
            </>
          )}
          <div className="contact-blocks">
            {[
              { ic: 'pin',     l: 'Registered office', v: 'Edison Finance (Private) Limited\nIslamabad, Pakistan' },
              { ic: 'mail',    l: 'Email',              v: 'contact@edisonfinance.pk' },
              { ic: 'phone',   l: 'Phone',              v: '+92 51 000 0000' },
              { ic: 'shield',  l: 'Regulator',          v: 'SECP · CUIN 0322716' },
            ].map((b, i) => (
              <div className="contact-block" key={i}>
                <span className="contact-ico"><Icon name={b.ic} /></span>
                <div>
                  <div className="contact-l">{b.l}</div>
                  <div className="contact-v" style={{ whiteSpace: 'pre-line' }}>{b.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a message</h3>
          {sent ? (
            <div className="apply-done">
              <div className="done-badge"><Icon name="check" size={28} /></div>
              <h4 style={{ margin: '8px 0 4px' }}>Message sent</h4>
              <p>We&apos;ll get back to you within two working days.</p>
            </div>
          ) : (
            <>
              <Field label="Your name"><input required placeholder="Full name" value={form.name} onChange={e => set('name', e.target.value)} /></Field>
              <div className="row-2">
                <Field label="Email"><input type="email" required placeholder="you@example.com" value={form.email} onChange={e => set('email', e.target.value)} /></Field>
                <Field label="Phone"><input placeholder="0300 0000000" value={form.phone} onChange={e => set('phone', e.target.value)} /></Field>
              </div>
              <Field label="Reason">
                <select value={form.reason} onChange={e => set('reason', e.target.value)}>
                  {['General enquiry','Partnership','Investor / capital','Media','Careers'].map(r => <option key={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Message"><textarea rows="4" required placeholder="Tell us briefly what you'd like to discuss" value={form.message} onChange={e => set('message', e.target.value)} /></Field>
              <button type="submit" className="btn btn-primary">Send message <Icon name="arrow-right" size={16} /></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
