import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';
import CoinOrb from '../graphics/CoinOrb.jsx';
import StackedCards from '../graphics/StackedCards.jsx';

function Dot() { return <span className="m-dot" aria-hidden="true">◆</span>; }

export default function Hero({ variant = 'coin' }) {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Pakistan · NBFC Microfinance</span>
          <h1 className="display-lg hero-title">
            Empowering micro&#x2011;entrepreneurs <em>through inclusive&nbsp;finance.</em>
          </h1>
          <p className="body-lg hero-sub">
            Edison Finance (Private) Limited is a forward&#x2011;looking microfinance institution
            committed to providing ethical, accessible, and innovative financial solutions across
            Pakistan &mdash; through both Shariah&#x2011;compliant and conventional products.
          </p>
          <div className="hero-ctas">
            <Link to="/apply" className="btn btn-primary">
              Apply for financing <Icon name="arrow-right" size={16} />
            </Link>
            <Link to="/products" className="btn btn-secondary">Explore our products</Link>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-num mono">CUIN 0322716</div>
              <div className="trust-lbl">SECP-incorporated · Jan 2026</div>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <div className="trust-num mono">PKR 2.0B</div>
              <div className="trust-lbl">Federal Government pilot commitment</div>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <div className="trust-num mono">Hybrid</div>
              <div className="trust-lbl">Shariah-compliant + conventional</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {variant === 'cards' ? <StackedCards /> : <CoinOrb />}
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="marquee-row" key={k}>
              <span>SECP-Incorporated</span><Dot />
              <span>NBFC Microfinance License — In Process</span><Dot />
              <span>Hazza Institute of Technology Partner</span><Dot />
              <span>Shariah Governance + Conventional Risk</span><Dot />
              <span>Companies Act, 2017</span><Dot />
              <span>Islamabad · Pakistan</span><Dot />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
