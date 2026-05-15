import Icon from '../common/Icon.jsx';

const GOALS = [
  { t: 'Sectoral insight',       d: 'Products aligned with the financial and social needs of micro and small entrepreneurs.' },
  { t: 'Digital outreach',       d: 'Tech-driven origination and servicing to reduce cost and expand reach.' },
  { t: 'Ethical financing',      d: 'Responsible, Shariah-aligned products inside a commercially viable structure.' },
  { t: 'Funding partnerships',   d: 'Local and international institutions for diversified fund mobilization.' },
  { t: 'Strong governance',      d: 'Risk management and compliance frameworks aligned to SECP standards.' },
  { t: 'Phased product breadth', d: 'Begin with microcredit; expand into savings, insurance, and literacy programs.' },
  { t: 'Financial literacy',     d: 'Equip borrowers with knowledge to grow sustainably and reduce dependency on informal credit.' },
];

const TARGETS = [
  { ic: 'people',  l: 'Low-income individuals' },
  { ic: 'store',   l: 'Micro & small businesses' },
  { ic: 'tractor', l: 'Farmers & agri-entrepreneurs' },
  { ic: 'women',   l: 'Women entrepreneurs' },
];

export default function Strategy({ noHead = false }) {
  return (
    <section id="strategy" className="section strategy">
      <div className="container">
        {!noHead && (
          <div className="strategy-head">
            <span className="eyebrow">Our strategy</span>
            <h2 className="display-md">A phased path from district pilots to nationwide microfinance scale.</h2>
          </div>
        )}
        <div className="strategy-grid">
          <div className="strategy-left">
            <h3 className="h3-section">Strategic objectives</h3>
            <div className="goals">
              {GOALS.map((g, i) => (
                <div className="goal" key={i}>
                  <span className="goal-num mono">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="goal-t">{g.t}</div>
                    <div className="goal-d">{g.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="strategy-right">
            <div className="target-card">
              <h3 className="h3-section">Target market</h3>
              <div className="targets">
                {TARGETS.map((t, i) => (
                  <div className="target" key={i}>
                    <span className="target-ico"><Icon name={t.ic} /></span>
                    <span>{t.l}</span>
                  </div>
                ))}
              </div>
              <div className="target-foot">
                <Icon name="pin" size={16} />
                <span>Beginning in selected districts · expanding nationwide</span>
              </div>
            </div>
            <div className="phase-card">
              <h3 className="h3-section">Growth phases</h3>
              <ol className="phases">
                <li><span className="phase-pill">Phase 1</span><div><strong>District pilots</strong><span>Hazza-graduate financing rollout post-license</span></div></li>
                <li><span className="phase-pill">Phase 2</span><div><strong>Provincial expansion</strong><span>Multi-product portfolio · 10+ districts</span></div></li>
                <li><span className="phase-pill">Phase 3</span><div><strong>Nationwide scale</strong><span>Savings, Takaful, financial literacy</span></div></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
