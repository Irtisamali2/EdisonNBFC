/* ==========================================================================
   Edison Finance — About + Strategy + Hybrid model
   ========================================================================== */

function HighlightStrip() {
  const items = [
    { icon: 'scale', t: 'Hybrid model', s: 'Shariah-compliant + conventional' },
    { icon: 'people', t: 'Inclusive', s: 'Urban + rural underserved communities' },
    { icon: 'chip', t: 'Digital-first', s: 'Tech-driven outreach & operations' },
    { icon: 'shield', t: 'Ethical financing', s: 'Responsible, transparent practices' },
    { icon: 'globe', t: 'Phased growth', s: 'Districts → nationwide coverage' },
  ];
  return (
    <section className="strip">
      <div className="container strip-row">
        {items.map((it, i) => (
          <div className="strip-item" key={i}>
            <span className="strip-ico"><Icon name={it.icon} /></span>
            <div>
              <div className="strip-t">{it.t}</div>
              <div className="strip-s">{it.s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ noHead }) {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-left">
          {!noHead && (
            <>
              <span className="eyebrow">About Edison Finance</span>
              <h2 className="display-md">A microfinance NBFC built for the entrepreneurs who power Pakistan&apos;s informal economy.</h2>
            </>
          )}
          {noHead && (
            <span className="eyebrow">Company overview</span>
          )}
        </div>
        <div className="about-right">
          <p className="body-lg">
            Edison Finance (Private) Limited is a Pakistan-based microfinance NBFC, incorporated
            on <strong>14 January 2026</strong> in Islamabad under the Companies Act, 2017. We
            bridge the financial gap for individuals, small businesses, farmers, and underserved
            communities — through both Shariah-compliant and conventional financing.
          </p>
          <p className="body-lg">
            Our hybrid model lets us serve diverse customer preferences while honouring the
            ethical and risk standards Pakistan&apos;s financial sector demands. We are commercially
            viable and socially anchored — built to last.
          </p>

          <div className="about-stats">
            <div>
              <div className="stat-num">PKR 50M</div>
              <div className="stat-lbl">Minimum paid-up capital · regulatory</div>
            </div>
            <div>
              <div className="stat-num">6 mo</div>
              <div className="stat-lbl">License window · expected by Jul 2026</div>
            </div>
            <div>
              <div className="stat-num">3</div>
              <div className="stat-lbl">Sponsor shareholders · majority resident</div>
            </div>
          </div>

          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-tag">Vision</div>
              <p>Provide responsible, inclusive, and ethical financial services that empower micro-entrepreneurs to achieve economic self-reliance and socio-economic uplift.</p>
            </div>
            <div className="vm-card vm-card-dark">
              <div className="vm-tag vm-tag-dark">Mission</div>
              <ul>
                <li>Focus on micro-entrepreneurs from urban &amp; low-income communities</li>
                <li>Unlock potential through accessible, affordable, ethically structured finance</li>
                <li>Offer both Shariah-compliant and conventional solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HybridModel() {
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
              <Icon name="moon" size={28} />
              <h3>Shariah-compliant</h3>
            </div>
            <p>Islamic financing modes governed by a Shariah board, structured for ethical, asset-backed lending.</p>
            <ul className="hybrid-tags">
              <li>Murabaha</li><li>Salam</li><li>Qard Hasan</li><li>Takaful</li>
            </ul>
          </div>

          <div className="hybrid-mid">
            <div className="hybrid-mid-orb">
              <span className="hybrid-mid-label">EDF</span>
            </div>
            <div className="hybrid-mid-line" />
          </div>

          <div className="hybrid-col hybrid-conv">
            <div className="hybrid-col-head">
              <Icon name="building" size={28} />
              <h3>Conventional</h3>
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

function Strategy({ noHead }) {
  const goals = [
    { t: 'Sectoral insight', d: 'Products aligned with the financial & social needs of micro and small entrepreneurs.' },
    { t: 'Digital outreach', d: 'Tech-driven origination and servicing to reduce cost and expand reach.' },
    { t: 'Ethical financing', d: 'Responsible, Shariah-aligned products inside a commercially viable structure.' },
    { t: 'Funding partnerships', d: 'Local and international institutions for diversified fund mobilization.' },
    { t: 'Strong governance', d: 'Risk management and compliance frameworks aligned to SECP standards.' },
    { t: 'Phased product breadth', d: 'Begin with microcredit; expand into savings, insurance, and literacy.' },
  ];
  const targets = [
    { ic: 'people', l: 'Low-income individuals' },
    { ic: 'store',  l: 'Micro & small businesses' },
    { ic: 'tractor', l: 'Farmers & agri-entrepreneurs' },
    { ic: 'women', l: 'Women entrepreneurs' },
  ];
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
              {goals.map((g, i) => (
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
                {targets.map((t, i) => (
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

window.HighlightStrip = HighlightStrip;
window.About = About;
window.HybridModel = HybridModel;
window.Strategy = Strategy;
