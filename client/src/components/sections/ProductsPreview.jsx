import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

const ITEMS = [
  { ic: 'store',   t: 'Small enterprise financing',          d: 'Conventional and Shariah-compliant capital for shopkeepers, micro and small businesses.' },
  { ic: 'women',   t: 'Microfinance for income generation',  d: 'Micro-loans and Qard Hasan — with a special focus on women borrowers.' },
  { ic: 'tractor', t: 'Agricultural financing',              d: 'Salam, Murabaha, and conventional loans for farmers and agri-entrepreneurs.' },
  { ic: 'bike',    t: 'Digital & consumer financing',        d: 'EV bike financing, payday loans, and merchant financing for the digital economy.' },
];

export default function ProductsPreview() {
  return (
    <section className="section section-cream pp">
      <div className="container">
        <div className="pp-head">
          <div>
            <span className="eyebrow">Products &amp; services</span>
            <h2 className="display-md">Financial solutions for the way Pakistan actually borrows.</h2>
          </div>
          <Link to="/products" className="pp-all">All products <Icon name="arrow-up-right" size={14} /></Link>
        </div>
        <div className="pp-grid">
          {ITEMS.map((p, i) => (
            <Link to="/products" className="pp-card" key={i}>
              <span className="pp-ico"><Icon name={p.ic} size={22} /></span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="pp-cta">Learn more <Icon name="arrow-right" size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
