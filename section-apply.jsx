/* ==========================================================================
   Edison Finance — Apply (multi-step) + Contact + Footer
   ========================================================================== */

function Apply({ noHead }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '', cnic: '', phone: '', city: '',
    productMode: 'shariah', productType: 'Murabaha',
    amount: 100000, tenor: 12, purpose: '',
    sector: '', monthlyIncome: '', employment: 'self',
    consent: false,
  });
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const totalSteps = 4;
  const next = () => setStep(s => Math.min(totalSteps, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));

  const stepLabels = ['Borrower', 'Product', 'Capacity', 'Review'];

  return (
    <section id="apply" className="section section-cream apply">
      <div className="container apply-grid">
        <div className="apply-left">
          {!noHead && (
            <>
              <span className="eyebrow">Apply for financing</span>
              <h2 className="display-md">Start your application — it takes about 4 minutes.</h2>
              <p className="body-lg">Submissions are reviewed once Edison Finance receives its NBFC license (expected July 2026). Early applicants are prioritised in our pilot district rollout.</p>
            </>
          )}
          {noHead && (
            <>
              <span className="eyebrow">Why apply early</span>
              <h2 className="display-md apply-side-h">A few good reasons to start now.</h2>
            </>
          )}
          <ul className="apply-bullets">
            <li><Icon name="check" size={16}/> No collateral for ticket sizes under PKR 100,000</li>
            <li><Icon name="check" size={16}/> Shariah and conventional structures available</li>
            <li><Icon name="check" size={16}/> Decision in 5 working days post-license</li>
            <li><Icon name="check" size={16}/> Hazza Institute graduates fast-tracked</li>
          </ul>
        </div>

        <div className="apply-right">
          <div className="apply-card">
            <div className="stepper">
              {stepLabels.map((l, i) => (
                <div key={i} className={`step ${i === step ? 'step-on' : ''} ${i < step ? 'step-done' : ''}`}>
                  <div className="step-dot">{i < step ? <Icon name="check" size={12}/> : i + 1}</div>
                  <div className="step-l">{l}</div>
                </div>
              ))}
            </div>

            {step === 0 && (
              <div className="apply-step">
                <h3>Tell us about you</h3>
                <Field label="Full name (as per CNIC)"><input value={data.name} onChange={e => set('name', e.target.value)} placeholder="Ahmed Hussain"/></Field>
                <div className="row-2">
                  <Field label="CNIC"><input value={data.cnic} onChange={e => set('cnic', e.target.value)} placeholder="35202-0000000-0"/></Field>
                  <Field label="Mobile"><input value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="0300 0000000"/></Field>
                </div>
                <Field label="City">
                  <select value={data.city} onChange={e => set('city', e.target.value)}>
                    <option value="">Select city</option>
                    <option>Islamabad</option><option>Rawalpindi</option><option>Lahore</option>
                    <option>Faisalabad</option><option>Multan</option><option>Peshawar</option>
                    <option>Karachi</option><option>Quetta</option>
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
                      <Icon name={m === 'shariah' ? 'moon' : 'building'} size={16}/>
                      {m === 'shariah' ? 'Shariah-compliant' : 'Conventional'}
                    </button>
                  ))}
                </div>
                <Field label="Product">
                  <select value={data.productType} onChange={e => set('productType', e.target.value)}>
                    {(data.productMode === 'shariah'
                      ? ['Murabaha','Salam','Qard Hasan','Takaful']
                      : ['Term loan','EV bike','Payday','Merchant financing']
                    ).map(p => <option key={p}>{p}</option>)}
                  </select>
                </Field>
                <Field label={`Amount — PKR ${(+data.amount).toLocaleString('en-IN')}`}>
                  <input type="range" min="10000" max="2000000" step="5000" value={data.amount} onChange={e => set('amount', +e.target.value)}/>
                </Field>
                <Field label={`Tenor — ${data.tenor} months`}>
                  <input type="range" min="3" max="36" step="1" value={data.tenor} onChange={e => set('tenor', +e.target.value)}/>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="apply-step">
                <h3>Repayment capacity</h3>
                <Field label="Sector">
                  <select value={data.sector} onChange={e => set('sector', e.target.value)}>
                    <option value="">Select sector</option>
                    <option>Retail / shopkeeping</option><option>Tailoring / handicrafts</option>
                    <option>Agriculture / livestock</option><option>Transport / EV bike</option>
                    <option>Services</option><option>Education / Hazza graduate</option><option>Other</option>
                  </select>
                </Field>
                <div className="row-2">
                  <Field label="Monthly income (PKR)"><input value={data.monthlyIncome} onChange={e => set('monthlyIncome', e.target.value)} placeholder="35,000"/></Field>
                  <Field label="Employment">
                    <select value={data.employment} onChange={e => set('employment', e.target.value)}>
                      <option value="self">Self-employed</option>
                      <option value="salaried">Salaried</option>
                      <option value="farmer">Farmer</option>
                      <option value="student">Student / Graduate</option>
                    </select>
                  </Field>
                </div>
                <Field label="Purpose of financing"><textarea rows="3" value={data.purpose} onChange={e => set('purpose', e.target.value)} placeholder="e.g. Purchase of stock for kiryana store; expanding tailoring unit; EV bike for delivery"/></Field>
              </div>
            )}

            {step === 3 && (
              <div className="apply-step">
                <h3>Review &amp; submit</h3>
                <div className="review">
                  <ReviewRow l="Name" v={data.name || '—'}/>
                  <ReviewRow l="CNIC" v={data.cnic || '—'}/>
                  <ReviewRow l="Mobile" v={data.phone || '—'}/>
                  <ReviewRow l="City" v={data.city || '—'}/>
                  <hr/>
                  <ReviewRow l="Mode" v={data.productMode === 'shariah' ? 'Shariah-compliant' : 'Conventional'}/>
                  <ReviewRow l="Product" v={data.productType}/>
                  <ReviewRow l="Amount" v={`PKR ${(+data.amount).toLocaleString('en-IN')}`}/>
                  <ReviewRow l="Tenor" v={`${data.tenor} months`}/>
                  <hr/>
                  <ReviewRow l="Sector" v={data.sector || '—'}/>
                  <ReviewRow l="Monthly income" v={data.monthlyIncome ? `PKR ${data.monthlyIncome}` : '—'}/>
                  <ReviewRow l="Employment" v={data.employment}/>
                </div>
                <label className="consent">
                  <input type="checkbox" checked={data.consent} onChange={e => set('consent', e.target.checked)}/>
                  <span>I consent to credit verification and to be contacted by Edison Finance regarding this application.</span>
                </label>
              </div>
            )}

            {step === totalSteps && (
              <div className="apply-step apply-done">
                <div className="done-badge"><Icon name="check" size={28}/></div>
                <h3>Application received</h3>
                <p>Thank you, {data.name || 'Applicant'}. A reference ID will be sent to {data.phone || 'your mobile'} once Edison Finance receives its NBFC license.</p>
                <div className="mono done-ref">REF · EDF-{Math.random().toString(36).slice(2, 8).toUpperCase()}</div>
              </div>
            )}

            <div className="apply-nav">
              {step > 0 && step < totalSteps && <button className="btn btn-secondary" onClick={back}>Back</button>}
              <span style={{ flex: 1 }}/>
              {step < totalSteps - 1 && <button className="btn btn-primary" onClick={next}>Continue <Icon name="arrow-right" size={16}/></button>}
              {step === totalSteps - 1 && <button className="btn btn-primary" disabled={!data.consent} onClick={next}>Submit application <Icon name="arrow-right" size={16}/></button>}
              {step === totalSteps && <button className="btn btn-secondary" onClick={() => { setStep(0); }}>Start another</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return <label className="field"><span className="field-l">{label}</span>{children}</label>;
}
function ReviewRow({ l, v }) {
  return <div className="review-row"><span>{l}</span><span>{v}</span></div>;
}

function Contact({ noHead }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          {!noHead && (
            <>
              <span className="eyebrow">Contact</span>
              <h2 className="display-md">Talk to our team — partnerships, media, careers, and capital.</h2>
              <p className="body-lg">We are based in Islamabad and currently building out our team for the licensed launch. We respond within two working days.</p>
            </>
          )}
          {noHead && (
            <>
              <span className="eyebrow">Where to find us</span>
              <h2 className="display-md apply-side-h">Direct contacts.</h2>
            </>
          )}

          <div className="contact-blocks">
            <div className="contact-block">
              <span className="contact-ico"><Icon name="pin"/></span>
              <div>
                <div className="contact-l">Registered office</div>
                <div className="contact-v">Edison Finance (Private) Limited<br/>Islamabad, Pakistan</div>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-ico"><Icon name="mail"/></span>
              <div>
                <div className="contact-l">Email</div>
                <div className="contact-v">contact@edisonfinance.pk</div>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-ico"><Icon name="phone"/></span>
              <div>
                <div className="contact-l">Phone</div>
                <div className="contact-v">+92 51 000 0000</div>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-ico"><Icon name="shield"/></span>
              <div>
                <div className="contact-l">Regulator</div>
                <div className="contact-v">SECP · CUIN 0322716</div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <h3>Send a message</h3>
          {sent ? (
            <div className="apply-done">
              <div className="done-badge"><Icon name="check" size={28}/></div>
              <h4 style={{ margin: '8px 0 4px' }}>Message sent</h4>
              <p>We'll get back to you within two working days.</p>
            </div>
          ) : (
            <>
              <Field label="Your name"><input required placeholder="Full name"/></Field>
              <div className="row-2">
                <Field label="Email"><input type="email" required placeholder="you@example.com"/></Field>
                <Field label="Phone"><input placeholder="0300 0000000"/></Field>
              </div>
              <Field label="Reason">
                <select>
                  <option>General enquiry</option>
                  <option>Partnership</option>
                  <option>Investor / capital</option>
                  <option>Media</option>
                  <option>Careers</option>
                </select>
              </Field>
              <Field label="Message"><textarea rows="4" required placeholder="Tell us briefly what you'd like to discuss"/></Field>
              <button type="submit" className="btn btn-primary">Send message <Icon name="arrow-right" size={16}/></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-row">
        <div className="foot-brand">
          <a href="index.html" className="brand-link" aria-label="Edison Finance home">
            <EdisonLockup size="md" variant="dark" />
          </a>
          <p>Capital that reaches the hands that build Pakistan. Shariah-compliant and conventional microfinance for the entrepreneurs of the informal economy.</p>
          <div className="foot-cred mono">CUIN 0322716 · Incorporated 14 Jan 2026 · Islamabad</div>
        </div>

        <div className="foot-cols">
          <div>
            <div className="foot-h">Company</div>
            <a href="about.html">About</a><a href="strategy.html">Strategy</a><a href="impact.html">Impact</a><a href="contact.html">Contact</a>
          </div>
          <div>
            <div className="foot-h">Products</div>
            <a href="products.html">Murabaha</a><a href="products.html">Salam</a><a href="products.html">Qard Hasan</a><a href="products.html">EV bike financing</a><a href="products.html">Merchant</a>
          </div>
          <div>
            <div className="foot-h">Resources</div>
            <a href="products.html#calculator">Loan calculator</a><a href="apply.html">Apply</a><a href="about.html#governance">Governance</a><a href="about.html#sponsors">Sponsors</a>
          </div>
          <div>
            <div className="foot-h">Legal</div>
            <a href="about.html">Privacy</a><a href="about.html">Terms</a><a href="about.html#hybrid">Shariah governance</a><a href="contact.html">Grievance redressal</a>
          </div>
        </div>
      </div>

      <div className="container foot-bottom">
        <span>© 2026 Edison Finance (Private) Limited. All rights reserved.</span>
        <span>Regulated by the Securities and Exchange Commission of Pakistan (SECP). NBFC license — in process.</span>
      </div>
    </footer>
  );
}

window.Apply = Apply;
window.Contact = Contact;
window.Footer = Footer;
