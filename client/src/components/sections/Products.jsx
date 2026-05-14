import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

const PRODUCTS = {
  shariah: [
    { ic: 'store',  t: 'Murabaha — Small Enterprise',    d: 'Asset-backed financing for shopkeepers and micro-businesses. Cost-plus, transparent profit margin, asset disclosed up front.', tag: 'PKR 50K – 1.5M', tenor: '6–24 months', mode: 'Shariah' },
    { ic: 'tractor',t: 'Salam — Agricultural',           d: 'Pre-harvest financing for small-scale farmers. Capital today, agreed produce on delivery date.', tag: 'PKR 75K – 1.0M', tenor: '6–12 months', mode: 'Shariah' },
    { ic: 'women',  t: 'Qard Hasan — Income Generation', d: 'Interest-free goodwill loans for women micro-entrepreneurs and first-time borrowers.', tag: 'PKR 25K – 200K', tenor: '6–18 months', mode: 'Shariah' },
    { ic: 'shield', t: 'Takaful — Micro-Insurance',      d: 'Cooperative protection for life, health, and livestock — Shariah-compliant risk-sharing.', tag: 'Coverage to PKR 500K', tenor: 'Annual', mode: 'Planned' },
  ],
  conventional: [
    { ic: 'graph',  t: 'Small Enterprise Term Loan',  d: 'Working-capital and growth financing for established micro and small enterprises with documented cash flow.', tag: 'PKR 100K – 2.0M', tenor: '12–36 months', mode: 'Conventional' },
    { ic: 'bike',   t: 'EV Bike Financing',           d: 'Green-mobility lease for electric two-wheelers — lower running cost, structured monthly instalments.', tag: 'PKR 120K – 250K', tenor: '12–24 months', mode: 'Conventional' },
    { ic: 'wallet', t: 'Payday & Salary Loans',       d: 'Short-term liquidity for salaried borrowers, with same-day disbursement for verified employers.', tag: 'PKR 10K – 100K', tenor: '1–6 months', mode: 'Conventional' },
    { ic: 'tag',    t: 'Merchant Financing',          d: 'Receivables-based financing for merchants on payment platforms — auto-repayment from settlements.', tag: 'PKR 50K – 1.0M', tenor: '3–12 months', mode: 'Conventional' },
  ],
};

export default function Products({ noHead = false }) {
  const [tab, setTab] = useState('shariah');
  const list = PRODUCTS[tab];

  return (
    <section id="products" className="section products">
      <div className="container">
        {!noHead ? (
          <div className="products-head">
            <div>
              <span className="eyebrow">Products &amp; services</span>
              <h2 className="display-md">A complete financing toolkit — for the way Pakistan actually borrows.</h2>
            </div>
            <Tabs tab={tab} setTab={setTab} />
          </div>
        ) : (
          <div className="tabs-row"><Tabs tab={tab} setTab={setTab} /></div>
        )}

        <div className="products-grid">
          {list.map((p, i) => (
            <article className="product-card card card-interactive" key={tab + i}>
              <div className="product-top">
                <span className="product-ico"><Icon name={p.ic} size={22} /></span>
                <span className={`product-mode ${p.mode === 'Planned' ? 'product-mode-soft' : ''}`}>{p.mode}</span>
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className="product-meta">
                <div><span className="product-meta-l">Ticket size</span><span className="product-meta-v mono">{p.tag}</span></div>
                <div><span className="product-meta-l">Tenor</span><span className="product-meta-v mono">{p.tenor}</span></div>
              </div>
              <Link to="/apply" className="product-cta">Apply <Icon name="arrow-up-right" size={14} /></Link>
            </article>
          ))}
        </div>

        <div className="products-foot">
          <Icon name="spark" size={18} />
          <span><strong>Coming soon —</strong> Micro-savings · Financial literacy programs · Digital wallet for Hazza graduates</span>
        </div>
      </div>
    </section>
  );
}

function Tabs({ tab, setTab }) {
  return (
    <div className="tabs">
      <button className={`tab ${tab === 'shariah' ? 'tab-on' : ''}`} onClick={() => setTab('shariah')}>
        <Icon name="moon" size={16} /> Shariah-compliant
      </button>
      <button className={`tab ${tab === 'conventional' ? 'tab-on' : ''}`} onClick={() => setTab('conventional')}>
        <Icon name="building" size={16} /> Conventional
      </button>
    </div>
  );
}
