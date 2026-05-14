import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

const AIMS = [
  { ic: 'spark',  t: 'Support entrepreneurship' },
  { ic: 'people', t: 'Generate employment opportunities' },
  { ic: 'wallet', t: 'Improve financial access' },
  { ic: 'graph',  t: 'Promote inclusive economic growth' },
];

export default function ImpactPreview() {
  return (
    <section className="section section-dark ipv">
      <div className="container ipv-grid">
        <div>
          <span className="eyebrow eyebrow-light">Our impact</span>
          <h2 className="display-md ipv-h">Capital with a purpose.</h2>
          <p className="body-lg ipv-lede">
            Edison Finance aims to be a versatile, inclusive microfinance institution in Pakistan —
            supporting entrepreneurship, employment, and broader access to financial services.
          </p>
          <Link to="/impact" className="btn btn-on-dark ipv-cta">
            Read our impact framework <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="ipv-aims">
          {AIMS.map((a, i) => (
            <div className="ipv-aim" key={i}>
              <span className="ipv-ico"><Icon name={a.ic} size={18} /></span>
              <span>{a.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
