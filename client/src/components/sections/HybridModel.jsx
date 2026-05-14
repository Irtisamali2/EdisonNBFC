import Icon from '../common/Icon.jsx';

export default function HybridModel() {
  return (
    <section className="section section-cream hybrid">
      <div className="container">
        <div className="hybrid-head">
          <span className="eyebrow">Operational model</span>
          <h2 className="display-md">A hybrid lending architecture — two compliant tracks, one institution.</h2>
        </div>
        <div className="hybrid-grid">
          <div className="hybrid-col hybrid-shariah">
            <div className="hybrid-col-head">
              <Icon name="moon" size={28} /><h3>Shariah-compliant</h3>
            </div>
            <p>Islamic financing modes governed by a Shariah board, structured for ethical, asset-backed lending.</p>
            <ul className="hybrid-tags">
              <li>Murabaha</li><li>Salam</li><li>Qard Hasan</li><li>Takaful</li>
            </ul>
          </div>
          <div className="hybrid-mid">
            <div className="hybrid-mid-orb"><span className="hybrid-mid-label">EDF</span></div>
            <div className="hybrid-mid-line" />
          </div>
          <div className="hybrid-col hybrid-conv">
            <div className="hybrid-col-head">
              <Icon name="building" size={28} /><h3>Conventional</h3>
            </div>
            <p>Traditional lending products with transparent pricing and conservative risk frameworks.</p>
            <ul className="hybrid-tags">
              <li>Term loans</li><li>Working capital</li><li>Payday</li><li>Insurance</li>
            </ul>
          </div>
        </div>
        <div className="hybrid-foot">
          <div className="hybrid-foot-item"><strong>Maximize outreach</strong><span>across diverse customer segments</span></div>
          <div className="hybrid-foot-item"><strong>Enhance trust</strong><span>through compliance and transparency</span></div>
          <div className="hybrid-foot-item"><strong>Sustainable growth</strong><span>balanced capital structure &amp; liquidity</span></div>
        </div>
      </div>
    </section>
  );
}
