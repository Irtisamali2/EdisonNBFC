import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

export default function CTASection() {
  return (
    <section className="cta-band">
      <div className="container cta-row">
        <div>
          <span className="eyebrow eyebrow-light">Ready to apply?</span>
          <h2 className="display-md cta-h">Start your financing application — it takes about 4 minutes.</h2>
        </div>
        <div className="cta-actions">
          <Link to="/apply" className="btn btn-primary">
            Apply for financing <Icon name="arrow-right" size={16} />
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-on-dark">Talk to our team</Link>
        </div>
      </div>
    </section>
  );
}
