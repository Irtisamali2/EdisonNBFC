import { useState } from 'react';
import axios from 'axios';
import Icon from '../common/Icon.jsx';

function Field({ label, children }) {
  return <label className="field"><span className="field-l">{label}</span>{children}</label>;
}
function ReviewRow({ l, v }) {
  return <div className="review-row"><span>{l}</span><span>{v}</span></div>;
}

const INITIAL = {
  name: '', cnic: '', phone: '', city: '',
  productMode: 'shariah', productType: 'Murabaha',
  amount: 100000, tenor: 12, purpose: '',
  sector: '', monthlyIncome: '', employment: 'self', consent: false,
};

export default function Apply({ noHead = false }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const TOTAL = 4;
  const next = () => setStep(s => Math.min(TOTAL, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));
  const LABELS = ['Borrower', 'Product', 'Capacity', 'Review'];

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post('/api/applications', data);
      setRefId(res.data.refId || 'EDF-' + Math.random().toString(36).slice(2, 8).toUpperCase());
      setStep(TOTAL);
    } catch {
      setRefId('EDF-' + Math.random().toString(36).slice(2, 8).toUpperCase());
      setStep(TOTAL);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="apply" className="section section-cream apply">
      <div className="container apply-grid">
        <div className="apply-left">
          {!noHead ? (
            <>
              <span className="eyebrow">Apply for financing</span>
              <h2 className="display-md">Start your application — it takes about 4 minutes.</h2>
              <p className="body-lg">Submissions are reviewed once Edison Finance receives its NBFC license (expected July 2026). Early applicants are prioritised in our pilot district rollout.</p>
            </>
          ) : (
            <>
              <span className="eyebrow">Why apply early</span>
              <h2 className="display-md apply-side-h">A few good reasons to start now.</h2>
            </>
          )}
          <ul className="apply-bullets">
            {['No collateral for ticket sizes under PKR 100,000', 'Shariah and conventional structures available', 'Decision in 5 working days post-license', 'Hazza Institute graduates fast-tracked'].map((b, i) => (
              <li key={i}><Icon name="check" size={16} /> {b}</li>
            ))}
          </ul>
        </div>

        <div className="apply-right">
          <div className="apply-card">
            <div className="stepper">
              {LABELS.map((l, i) => (
                <div key={i} className={`step ${i === step ? 'step-on' : ''} ${i < step ? 'step-done' : ''}`}>
                  <div className="step-dot">{i < step ? <Icon name="check" size={12} /> : i + 1}</div>
                  <div className="step-l">{l}</div>
                </div>
              ))}
            </div>

            {step === 0 && (
              <div className="apply-step">
                <h3>Tell us about you</h3>
                <Field label="Full name (as per CNIC)"><input value={data.name} onChange={e => set('name', e.target.value)} placeholder="Ahmed Hussain" /></Field>
                <div className="row-2">
                  <Field label="CNIC"><input value={data.cnic} onChange={e => set('cnic', e.target.value)} placeholder="35202-0000000-0" /></Field>
                  <Field label="Mobile"><input value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="0300 0000000" /></Field>
                </div>
                <Field label="City">
                  <select value={data.city} onChange={e => set('city', e.target.value)}>
                    <option value="">Select city</option>
                    {['Islamabad','Rawalpindi','Lahore','Faisalabad','Multan','Peshawar','Karachi','Quetta'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="apply-step">
                <h3>Choose your product</h3>
                <div className="apply-mode">
                  {['shariah','conventional'].map(m => (
                    <button key={m} className={`apply-mode-btn ${data.productMode === m ? 'on' : ''}`} onClick={() => { set('productMode', m); set('productType', m === 'shariah' ? 'Murabaha' : 'Term loan'); }}>
                      <Icon name={m === 'shariah' ? 'moon' : 'building'} size={16} />
                      {m === 'shariah' ? 'Shariah-compliant' : 'Conventional'}
                    </button>
                  ))}
                </div>
                <Field label="Product">
                  <select value={data.productType} onChange={e => set('productType', e.target.value)}>
                    {(data.productMode === 'shariah' ? ['Murabaha','Salam','Qard Hasan','Takaful'] : ['Term loan','EV bike','Payday','Merchant financing']).map(p => <option key={p}>{p}</option>)}
                  </select>
                </Field>
                <Field label={`Amount — PKR ${(+data.amount).toLocaleString('en-IN')}`}>
                  <input type="range" min="10000" max="2000000" step="5000" value={data.amount} onChange={e => set('amount', +e.target.value)} />
                </Field>
                <Field label={`Tenor — ${data.tenor} months`}>
                  <input type="range" min="3" max="36" step="1" value={data.tenor} onChange={e => set('tenor', +e.target.value)} />
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="apply-step">
                <h3>Repayment capacity</h3>
                <Field label="Sector">
                  <select value={data.sector} onChange={e => set('sector', e.target.value)}>
                    <option value="">Select sector</option>
                    {['Retail / shopkeeping','Tailoring / handicrafts','Agriculture / livestock','Transport / EV bike','Services','Education / Hazza graduate','Other'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <div className="row-2">
                  <Field label="Monthly income (PKR)"><input value={data.monthlyIncome} onChange={e => set('monthlyIncome', e.target.value)} placeholder="35,000" /></Field>
                  <Field label="Employment">
                    <select value={data.employment} onChange={e => set('employment', e.target.value)}>
                      <option value="self">Self-employed</option>
                      <option value="salaried">Salaried</option>
                      <option value="farmer">Farmer</option>
                      <option value="student">Student / Graduate</option>
                    </select>
                  </Field>
                </div>
                <Field label="Purpose of financing">
                  <textarea rows="3" value={data.purpose} onChange={e => set('purpose', e.target.value)} placeholder="e.g. Purchase of stock for kiryana store; expanding tailoring unit; EV bike for delivery" />
                </Field>
              </div>
            )}

            {step === 3 && (
              <div className="apply-step">
                <h3>Review &amp; submit</h3>
                <div className="review">
                  <ReviewRow l="Name" v={data.name || '—'} />
                  <ReviewRow l="CNIC" v={data.cnic || '—'} />
                  <ReviewRow l="Mobile" v={data.phone || '—'} />
                  <ReviewRow l="City" v={data.city || '—'} />
                  <hr />
                  <ReviewRow l="Mode" v={data.productMode === 'shariah' ? 'Shariah-compliant' : 'Conventional'} />
                  <ReviewRow l="Product" v={data.productType} />
                  <ReviewRow l="Amount" v={`PKR ${(+data.amount).toLocaleString('en-IN')}`} />
                  <ReviewRow l="Tenor" v={`${data.tenor} months`} />
                  <hr />
                  <ReviewRow l="Sector" v={data.sector || '—'} />
                  <ReviewRow l="Monthly income" v={data.monthlyIncome ? `PKR ${data.monthlyIncome}` : '—'} />
                  <ReviewRow l="Employment" v={data.employment} />
                </div>
                <label className="consent">
                  <input type="checkbox" checked={data.consent} onChange={e => set('consent', e.target.checked)} />
                  <span>I consent to credit verification and to be contacted by Edison Finance regarding this application.</span>
                </label>
              </div>
            )}

            {step === TOTAL && (
              <div className="apply-step apply-done">
                <div className="done-badge"><Icon name="check" size={28} /></div>
                <h3>Application received</h3>
                <p>Thank you, {data.name || 'Applicant'}. A reference ID will be sent to {data.phone || 'your mobile'} once Edison Finance receives its NBFC license.</p>
                <div className="mono done-ref">REF · {refId}</div>
              </div>
            )}

            <div className="apply-nav">
              {step > 0 && step < TOTAL && <button className="btn btn-secondary" onClick={back}>Back</button>}
              <span style={{ flex: 1 }} />
              {step < TOTAL - 1 && <button className="btn btn-primary" onClick={next}>Continue <Icon name="arrow-right" size={16} /></button>}
              {step === TOTAL - 1 && (
                <button className="btn btn-primary" disabled={!data.consent || submitting} onClick={submit}>
                  {submitting ? 'Submitting…' : 'Submit application'} <Icon name="arrow-right" size={16} />
                </button>
              )}
              {step === TOTAL && <button className="btn btn-secondary" onClick={() => { setStep(0); setData(INITIAL); }}>Start another</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
