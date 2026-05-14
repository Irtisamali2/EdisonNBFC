import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

const ITEMS = [
  'Hybrid financing model — Islamic + conventional',
  'Focus on financial inclusion',
  'Digital and technology-driven approach',
  'Serving urban and rural communities',
  'Ethical and responsible financing',
];

export default function AboutSnapshot() {
  return (
    <section className="section snapshot">
      <div className="container snapshot-grid">
        <div>
          <span className="eyebrow">About Edison Finance</span>
          <h2 className="display-md">A Non-Banking Finance Company focused on the microfinance sector.</h2>
          <p className="body-lg">
            Edison Finance (Private) Limited is incorporated under the Companies Act, 2017 and operates
            in Pakistan&apos;s microfinance sector — promoting financial inclusion and economic empowerment.
            We serve individuals, small businesses, farmers, and underserved communities through
            <strong> both conventional and Shariah-compliant </strong> financial solutions.
          </p>
          <div className="snapshot-actions">
            <Link to="/about" className="btn btn-primary">Read about us <Icon name="arrow-right" size={16} /></Link>
            <Link to="/strategy" className="btn btn-secondary">Our strategy</Link>
          </div>
        </div>
        <div className="snapshot-right">
          <div className="snapshot-card">
            <div className="snapshot-card-h">Key highlights</div>
            <ul className="snapshot-list">
              {ITEMS.map((it, i) => (
                <li key={i}>
                  <span className="snapshot-tick"><Icon name="check" size={14} /></span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
