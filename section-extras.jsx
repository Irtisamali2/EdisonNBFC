/* ==========================================================================
   Edison Finance — Extra section components for the multi-page site
   - AboutSnapshot, ProductsPreview, ImpactPreview (home-page condensed)
   - RegulatoryStatus, StrategicPositioning (inner-page detail)
   ========================================================================== */

function AboutSnapshot() {
  const items = [
    'Hybrid financing model — Islamic + conventional',
    'Focus on financial inclusion',
    'Digital and technology-driven approach',
    'Serving urban and rural communities',
    'Ethical and responsible financing',
  ];
  return (
    <section className="section snapshot">
      <div className="container snapshot-grid">
        <div>
          <span className="eyebrow">About Edison Finance</span>
          <h2 className="display-md">A Non-Banking Finance Company focused on the microfinance sector.</h2>
          <p className="body-lg">
            Edison Finance (Private) Limited is incorporated under the Companies Act, 2017 and operates in
            Pakistan&apos;s microfinance sector — promoting financial inclusion and economic empowerment.
            We serve individuals, small businesses, farmers, and underserved communities through
            <strong> both conventional and Shariah-compliant </strong> financial solutions.
          </p>
          <div className="snapshot-actions">
            <a href="about.html" className="btn btn-primary">Read about us <Icon name="arrow-right" size={16}/></a>
            <a href="strategy.html" className="btn btn-secondary">Our strategy</a>
          </div>
        </div>
        <div className="snapshot-right">
          <div className="snapshot-card">
            <div className="snapshot-card-h">Key highlights</div>
            <ul className="snapshot-list">
              {items.map((it, i) => (
                <li key={i}><span className="snapshot-tick"><Icon name="check" size={14}/></span>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const items = [
    { ic: 'store',   t: 'Small enterprise financing', d: 'Conventional and Shariah-compliant capital for shopkeepers, micro and small businesses.' },
    { ic: 'women',   t: 'Microfinance for income generation', d: 'Micro-loans and Qard Hasan — with a special focus on women borrowers.' },
    { ic: 'tractor', t: 'Agricultural financing', d: 'Salam, Murabaha, and conventional loans for farmers and agri-entrepreneurs.' },
    { ic: 'bike',    t: 'Digital & consumer financing', d: 'EV bike financing, payday loans, and merchant financing for the digital economy.' },
  ];
  return (
    <section className="section section-cream pp">
      <div className="container">
        <div className="pp-head">
          <div>
            <span className="eyebrow">Products &amp; services</span>
            <h2 className="display-md">Financial solutions for the way Pakistan actually borrows.</h2>
          </div>
          <a href="products.html" className="pp-all">All products <Icon name="arrow-up-right" size={14}/></a>
        </div>
        <div className="pp-grid">
          {items.map((p, i) => (
            <a href="products.html" className="pp-card" key={i}>
              <span className="pp-ico"><Icon name={p.ic} size={22}/></span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="pp-cta">Learn more <Icon name="arrow-right" size={14}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactPreview() {
  const aims = [
    { ic: 'spark',  t: 'Support entrepreneurship' },
    { ic: 'people', t: 'Generate employment opportunities' },
    { ic: 'wallet', t: 'Improve financial access' },
    { ic: 'graph',  t: 'Promote inclusive economic growth' },
  ];
  return (
    <section className="section section-dark ipv">
      <div className="container ipv-grid">
        <div>
          <span className="eyebrow eyebrow-light">Our impact</span>
          <h2 className="display-md ipv-h">Capital with a purpose.</h2>
          <p className="body-lg ipv-lede">Edison Finance aims to be a versatile, inclusive microfinance institution in Pakistan — supporting entrepreneurship, employment, and broader access to financial services.</p>
          <a href="impact.html" className="btn btn-on-dark ipv-cta">Read our impact framework <Icon name="arrow-right" size={16}/></a>
        </div>
        <div className="ipv-aims">
          {aims.map((a, i) => (
            <div className="ipv-aim" key={i}>
              <span className="ipv-ico"><Icon name={a.ic} size={18}/></span>
              <span>{a.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryStatus() {
  const items = [
    { l: 'Incorporation', v: 'Companies Act, 2017', d: 'Duly incorporated under the provisions of the Companies Act, 2017.' },
    { l: 'Registered with', v: 'SECP', d: 'Securities and Exchange Commission of Pakistan.' },
    { l: 'CUIN', v: '0322716', d: 'Corporate Unique Identification Number.' },
    { l: 'Incorporated on', v: '14 January 2026', d: 'Registered office at Islamabad.' },
    { l: 'Commissioner order', v: '07 January 2026', d: 'Permission under rule 4(2) of the NBFCs Establishment and Regulations Rules, 2003.' },
    { l: 'License window', v: '6 months', d: 'License must be obtained by 7 July 2026 (inclusive).' },
    { l: 'Paid-up share capital', v: 'PKR 50,000,000', d: 'Minimum statutory paid-up share capital to be deposited and verified to SECP.' },
    { l: 'License fee', v: 'PKR 760,000', d: 'Non-refundable, payable at the time of application submission.' },
  ];
  return (
    <section id="regulatory" className="section section-cream reg">
      <div className="container">
        <div className="reg-head">
          <span className="eyebrow">Regulatory status</span>
          <h2 className="display-md">Where we are on the licensing journey.</h2>
          <p className="body-lg reg-lede">
            Edison Finance (Private) Limited is in the process of obtaining its Non-Banking Finance
            Company (NBFC) license from the SECP. The company shall comply with all regulatory
            requirements prescribed under applicable NBFC rules.
          </p>
        </div>

        <div className="reg-table">
          {items.map((r, i) => (
            <div className="reg-row" key={i}>
              <div className="reg-l">{r.l}</div>
              <div className="reg-v"><strong>{r.v}</strong><span>{r.d}</span></div>
            </div>
          ))}
        </div>

        <div className="reg-foot">
          <Icon name="shield" size={18}/>
          <span>Upon successful evaluation and fulfilment of all regulatory conditions, the NBFC license shall be granted for a specified period, subject to compliance with the prevailing laws and regulatory framework.</span>
        </div>
      </div>
    </section>
  );
}

function StrategicPositioning() {
  const aims = [
    'Promote financial inclusion',
    'Drive social empowerment',
    'Enable sustainable economic growth',
  ];
  return (
    <section className="section sp">
      <div className="container sp-grid">
        <div>
          <span className="eyebrow">Strategic positioning</span>
          <h2 className="display-md sp-h">Aiming for financial inclusion, social empowerment, and sustainable growth.</h2>
        </div>
        <div className="sp-right">
          <ul className="sp-aims">
            {aims.map((a, i) => (
              <li key={i}><span className="sp-num mono">{String(i + 1).padStart(2, '0')}</span>{a}</li>
            ))}
          </ul>
          <p className="body-lg sp-target">
            <strong>Target market:</strong> low-income individuals, small-scale farmers, and micro-entrepreneurs in rural and urban Pakistan.
          </p>
          <p className="body-lg sp-target">
            <strong>Growth strategy:</strong> a phased approach — begin with selected districts, gradually expand nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}

window.AboutSnapshot = AboutSnapshot;
window.ProductsPreview = ProductsPreview;
window.ImpactPreview = ImpactPreview;
window.RegulatoryStatus = RegulatoryStatus;
window.StrategicPositioning = StrategicPositioning;
