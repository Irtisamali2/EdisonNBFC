/* ==========================================================================
   Edison Finance — Impact + Calculator + Apply + Contact + Footer
   ========================================================================== */

function Impact({ noHead }) {
  const aims = [
    { ic: 'spark', t: 'Support entrepreneurship', d: 'Capital, structure, and mentorship for the self-starters of Pakistan’s informal economy.' },
    { ic: 'people', t: 'Generate employment opportunities', d: 'Every micro-loan deployed creates downstream jobs in shops, fields, ateliers, and routes.' },
    { ic: 'wallet', t: 'Improve financial access', d: 'Reach underserved urban and rural communities through digital origination and on-ground partners.' },
    { ic: 'graph', t: 'Promote inclusive economic growth', d: 'Build a broader, more resilient economic base — by lending where the conventional sector won’t.' },
  ];
  const focus = [
    { ic: 'women', t: 'Women empowerment', d: 'Dedicated Qard Hasan tracks for women micro-entrepreneurs and group lending circles.' },
    { ic: 'tractor', t: 'Rural development', d: 'Salam and agri-financing for smallholder farmers and rural cooperatives.' },
    { ic: 'graph', t: 'Youth entrepreneurship', d: 'Federal-backed financing for graduates of the Hazza Institute of Technology.' },
    { ic: 'chip', t: 'Financial literacy', d: 'Borrower education modules built into onboarding \u2014 repayment confidence, not just access.' },
  ];
  return (
    <section id="impact" className="section section-dark impact">
      <div className="container">
        {!noHead && (
          <div className="impact-head">
            <span className="eyebrow eyebrow-light">Our impact</span>
            <h2 className="display-md impact-h">Driving economic empowerment — measured in livelihoods, not just loans.</h2>
            <p className="impact-lede">Edison Finance aims to bridge the financial gap for underserved segments of Pakistan&apos;s economy. Our impact is articulated by intent today, and will be measured by outcomes as our portfolio grows.</p>
          </div>
        )}

        <div className="aim-grid">
          {aims.map((a, i) => (
            <div className="aim-card" key={i}>
              <span className="aim-ico"><Icon name={a.ic} size={22}/></span>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          ))}
        </div>

        <div className="focus-head">
          <span className="eyebrow eyebrow-light">Focus areas</span>
          <h3 className="impact-h-sub">Where our capital lands first.</h3>
        </div>

        <div className="focus-grid">
          {focus.map((f, i) => (
            <div className="focus-card" key={i}>
              <span className="focus-ico"><Icon name={f.ic} size={22}/></span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [amount, setAmount] = React.useState(150000);
  const [tenor, setTenor] = React.useState(18);
  const [mode, setMode] = React.useState('shariah');
  const [product, setProduct] = React.useState('Murabaha');
  const rate = mode === 'shariah' ? (product === 'Qard Hasan' ? 0 : 0.14) : 0.18;
  const monthlyRate = rate / 12;
  const emi = monthlyRate === 0 ? amount / tenor :
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenor)) / (Math.pow(1 + monthlyRate, tenor) - 1);
  const total = emi * tenor;
  const profit = total - amount;
  const fmt = (n) => 'PKR ' + Math.round(n).toLocaleString('en-IN');

  return (
    <section id="calculator" className="section section-cream calc">
      <div className="container calc-grid">
        <div className="calc-left">
          <span className="eyebrow">Loan calculator</span>
          <h2 className="display-md">See your repayment before you apply.</h2>
          <p className="body-lg">Indicative figures only. Final pricing depends on credit assessment, product, and Shariah compliance review.</p>

          <div className="calc-mode">
            <button className={`calc-mode-btn ${mode === 'shariah' ? 'on' : ''}`} onClick={() => { setMode('shariah'); setProduct('Murabaha'); }}>
              <Icon name="moon" size={16}/> Shariah-compliant
            </button>
            <button className={`calc-mode-btn ${mode === 'conventional' ? 'on' : ''}`} onClick={() => { setMode('conventional'); setProduct('Term loan'); }}>
              <Icon name="building" size={16}/> Conventional
            </button>
          </div>

          <div className="calc-prods">
            {(mode === 'shariah' ? ['Murabaha','Salam','Qard Hasan'] : ['Term loan','EV bike','Payday','Merchant']).map((p) => (
              <button key={p} className={`prod-pill ${product === p ? 'on' : ''}`} onClick={() => setProduct(p)}>{p}</button>
            ))}
          </div>

          <div className="calc-slider">
            <div className="slider-row">
              <label>Amount</label>
              <span className="mono">{fmt(amount)}</span>
            </div>
            <input type="range" min="10000" max="2000000" step="5000" value={amount} onChange={e => setAmount(+e.target.value)} />
          </div>
          <div className="calc-slider">
            <div className="slider-row">
              <label>Tenor</label>
              <span className="mono">{tenor} months</span>
            </div>
            <input type="range" min="3" max="36" step="1" value={tenor} onChange={e => setTenor(+e.target.value)} />
          </div>
        </div>

        <div className="calc-right">
          <div className="calc-card">
            <div className="calc-card-head">
              <div>
                <div className="calc-card-l">Monthly instalment</div>
                <div className="calc-card-emi">{fmt(emi)}</div>
              </div>
              <div className="calc-rate">
                <div className="calc-rate-v mono">{(rate * 100).toFixed(0)}%</div>
                <div className="calc-rate-l">{rate === 0 ? 'Qard Hasan' : 'Indicative profit / interest'}</div>
              </div>
            </div>
            <div className="calc-bar">
              <div className="calc-bar-p" style={{ flex: amount }} title="Principal">
                <span>Principal</span><span className="mono">{fmt(amount)}</span>
              </div>
              <div className="calc-bar-i" style={{ flex: Math.max(profit, total*0.001) }} title="Profit / charge">
                <span>{rate === 0 ? 'No charge' : 'Profit / charge'}</span><span className="mono">{fmt(profit)}</span>
              </div>
            </div>
            <div className="calc-totals">
              <div><div className="calc-l">Total payable</div><div className="calc-v mono">{fmt(total)}</div></div>
              <div><div className="calc-l">Tenor</div><div className="calc-v mono">{tenor} mo</div></div>
              <div><div className="calc-l">Product</div><div className="calc-v">{product}</div></div>
            </div>
            <a href="apply.html" className="btn btn-primary calc-cta">
              Apply for this product <Icon name="arrow-right" size={16}/>
            </a>
          </div>
          <p className="calc-disc body-sm">Calculator output is indicative. Shariah products use cost-plus profit; Qard Hasan loans carry no charge. Conventional products carry a transparent annualised rate. Final terms are confirmed at sanction.</p>
        </div>
      </div>
    </section>
  );
}

window.Impact = Impact;
window.Calculator = Calculator;
