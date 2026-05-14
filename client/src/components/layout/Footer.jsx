import { Link } from 'react-router-dom';
import { EdisonLockup } from '../common/EdisonLogo.jsx';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-row">
        <div className="foot-brand">
          <Link to="/" className="brand-link" aria-label="Edison Finance home">
            <EdisonLockup size="md" variant="dark" />
          </Link>
          <p>Capital that reaches the hands that build Pakistan. Shariah-compliant and conventional microfinance for the entrepreneurs of the informal economy.</p>
          <div className="foot-cred mono">CUIN 0322716 · Incorporated 14 Jan 2026 · Islamabad</div>
        </div>

        <div className="foot-cols">
          <div>
            <div className="foot-h">Company</div>
            <Link to="/about">About</Link>
            <Link to="/strategy">Strategy</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <div className="foot-h">Products</div>
            <Link to="/products">Murabaha</Link>
            <Link to="/products">Salam</Link>
            <Link to="/products">Qard Hasan</Link>
            <Link to="/products">EV bike financing</Link>
            <Link to="/products">Merchant</Link>
          </div>
          <div>
            <div className="foot-h">Resources</div>
            <Link to="/products#calculator">Loan calculator</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/about#governance">Governance</Link>
            <Link to="/about#sponsors">Sponsors</Link>
          </div>
          <div>
            <div className="foot-h">Legal</div>
            <Link to="/about">Privacy</Link>
            <Link to="/about">Terms</Link>
            <Link to="/about#hybrid">Shariah governance</Link>
            <Link to="/contact">Grievance redressal</Link>
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
