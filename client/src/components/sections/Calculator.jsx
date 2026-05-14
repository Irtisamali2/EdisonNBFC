import { useState } from 'react';
import Icon from '../common/Icon.jsx';
import { Link } from 'react-router-dom';

const fmt = (n) => 'PKR ' + Math.round(n).toLocaleString('en-IN');

export default function Calculator() {
  const [amount, setAmount] = useState(150000);
  const [tenor, setTenor] = useState(18);
  const [mode, setMode] = useState('shariah');
  const [product, setProduct] = useState('Murabaha');

  const rate = mode === 'shariah' ? (product === 'Qard Hasan' ? 0 : 0.14) : 0.18;
  const monthlyRate = rate / 12;
  const emi = monthlyRate === 0
    ? amount / tenor
    : (amount * monthlyRate * Math.pow(1 + monthlyRate, tenor)) / (Math.pow(1 + monthlyRate, tenor) - 1);
  const total = emi * tenor;
  const profit = total - amount;

  const switchMode = (m) => {
    setMode(m);
    setProduct(m === 'shariah' ? 'Murabaha' : 'Term loan');
  };

  return (
    <section id="calculator" className="section section-cream calc">
      <div className="container calc-grid">
        <div className="calc-left">
          <span className="eyebrow">Loan calculator</span>
          <h2 className="display-md">See your repayment before you apply.</h2>
          <p className="body-lg">Indicative figures only. Final pricing depends on credit assessment, product, and Shariah compliance review.</p>

          <div className="calc-mode">
            <button className={`calc-mode-btn ${mode === 'shariah' ? 'on' : ''}`} onClick={() => switchMode('shariah')}>
              <Icon name="moon" size={16} /> Shariah-compliant
            </button>
            <button className={`calc-mode-btn ${mode === 'conventional' ? 'on' : ''}`} onClick={() => switchMode('conventional')}>
              <Icon name="building" size={16} /> Conventional
            </button>
          </div>

          <div className="calc-prods">
            {(mode === 'shariah' ? ['Murabaha', 'Salam', 'Qard Hasan'] : ['Term loan', 'EV bike', 'Payday', 'Merchant']).map((p) => (
              <button key={p} className={`prod-pill ${product === p ? 'on' : ''}`} onClick={() => setProduct(p)}>{p}</button>
            ))}
          </div>

          <div className="calc-slider">
            <div className="slider-row"><label>Amount</label><span className="mono">{fmt(amount)}</span></div>
            <input type="range" min="10000" max="2000000" step="5000" value={amount} onChange={e => setAmount(+e.target.value)} />
          </div>
          <div className="calc-slider">
            <div className="slider-row"><label>Tenor</label><span className="mono">{tenor} months</span></div>
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
              <div className="calc-bar-p" style={{ flex: amount }}><span>Principal</span><span className="mono">{fmt(amount)}</span></div>
              <div className="calc-bar-i" style={{ flex: Math.max(profit, total * 0.001) }}>
                <span>{rate === 0 ? 'No charge' : 'Profit / charge'}</span><span className="mono">{fmt(profit)}</span>
              </div>
            </div>
            <div className="calc-totals">
              <div><div className="calc-l">Total payable</div><div className="calc-v mono">{fmt(total)}</div></div>
              <div><div className="calc-l">Tenor</div><div className="calc-v mono">{tenor} mo</div></div>
              <div><div className="calc-l">Product</div><div className="calc-v">{product}</div></div>
            </div>
            <Link to="/apply" className="btn btn-primary calc-cta">Apply for this product <Icon name="arrow-right" size={16} /></Link>
          </div>
          <p className="calc-disc body-sm">Calculator output is indicative. Shariah products use cost-plus profit; Qard Hasan loans carry no charge. Conventional products carry a transparent annualised rate. Final terms are confirmed at sanction.</p>
        </div>
      </div>
    </section>
  );
}
