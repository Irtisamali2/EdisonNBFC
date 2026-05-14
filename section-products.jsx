/* ==========================================================================
   Edison Finance — Products tabs + Federal opportunity + Funding
   ========================================================================== */

const PRODUCTS = {
  shariah: [
    {
      ic: 'store', t: 'Murabaha — Small Enterprise',
      d: 'Asset-backed financing for shopkeepers and micro-businesses. Cost-plus, transparent profit margin, asset disclosed up front.',
      tag: 'PKR 50K – 1.5M', tenor: '6–24 months', mode: 'Shariah',
    },
    {
      ic: 'tractor', t: 'Salam — Agricultural',
      d: 'Pre-harvest financing for small-scale farmers. Capital today, agreed produce on delivery date.',
      tag: 'PKR 75K – 1.0M', tenor: '6–12 months', mode: 'Shariah',
    },
    {
      ic: 'women', t: 'Qard Hasan — Income Generation',
      d: 'Interest-free goodwill loans for women micro-entrepreneurs and first-time borrowers.',
      tag: 'PKR 25K – 200K', tenor: '6–18 months', mode: 'Shariah',
    },
    {
      ic: 'shield', t: 'Takaful — Micro-Insurance',
      d: 'Cooperative protection for life, health, and livestock — Shariah-compliant risk-sharing.',
      tag: 'Coverage to PKR 500K', tenor: 'Annual', mode: 'Planned',
    },
  ],
  conventional: [
    {
      ic: 'graph', t: 'Small Enterprise Term Loan',
      d: 'Working-capital and growth financing for established micro and small enterprises with documented cash flow.',
      tag: 'PKR 100K – 2.0M', tenor: '12–36 months', mode: 'Conventional',
    },
    {
      ic: 'bike', t: 'EV Bike Financing',
      d: 'Green-mobility lease for electric two-wheelers — lower running cost, structured monthly instalments.',
      tag: 'PKR 120K – 250K', tenor: '12–24 months', mode: 'Conventional',
    },
    {
      ic: 'wallet', t: 'Payday & Salary Loans',
      d: 'Short-term liquidity for salaried borrowers, with same-day disbursement for verified employers.',
      tag: 'PKR 10K – 100K', tenor: '1–6 months', mode: 'Conventional',
    },
    {
      ic: 'tag', t: 'Merchant Financing',
      d: 'Receivables-based financing for merchants on payment platforms — auto-repayment from settlements.',
      tag: 'PKR 50K – 1.0M', tenor: '3–12 months', mode: 'Conventional',
    },
  ],
};

function Products({ noHead }) {
  const [tab, setTab] = React.useState('shariah');
  const list = PRODUCTS[tab];
  return (
    <section id="products" className="section products">
      <div className="container">
        {!noHead && (
          <div className="products-head">
            <div>
              <span className="eyebrow">Products &amp; services</span>
              <h2 className="display-md">A complete financing toolkit — for the way Pakistan actually borrows.</h2>
            </div>
            <div className="tabs">
              <button className={`tab ${tab === 'shariah' ? 'tab-on' : ''}`} onClick={() => setTab('shariah')}>
                <Icon name="moon" size={16} /> Shariah-compliant
              </button>
              <button className={`tab ${tab === 'conventional' ? 'tab-on' : ''}`} onClick={() => setTab('conventional')}>
                <Icon name="building" size={16} /> Conventional
              </button>
            </div>
          </div>
        )}
        {noHead && (
          <div className="tabs-row">
            <div className="tabs">
              <button className={`tab ${tab === 'shariah' ? 'tab-on' : ''}`} onClick={() => setTab('shariah')}>
                <Icon name="moon" size={16} /> Shariah-compliant
              </button>
              <button className={`tab ${tab === 'conventional' ? 'tab-on' : ''}`} onClick={() => setTab('conventional')}>
                <Icon name="building" size={16} /> Conventional
              </button>
            </div>
          </div>
        )}

        <div className="products-grid">
          {list.map((p, i) => (
            <article className="product-card card card-interactive" key={tab + i}>
              <div className="product-top">
                <span className="product-ico"><Icon name={p.ic} size={22} /></span>
                <span className={`product-mode ${p.mode === 'Planned' ? 'product-mode-soft' : ''}`}>{p.mode}</span>
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className="product-meta">
                <div><span className="product-meta-l">Ticket size</span><span className="product-meta-v mono">{p.tag}</span></div>
                <div><span className="product-meta-l">Tenor</span><span className="product-meta-v mono">{p.tenor}</span></div>
              </div>
              <a href="apply.html" className="product-cta">
                Apply <Icon name="arrow-up-right" size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="products-foot">
          <Icon name="spark" size={18} />
          <span><strong>Coming soon —</strong> Micro-savings · Financial literacy programs · Digital wallet for Hazza graduates</span>
        </div>
      </div>
    </section>
  );
}

function FederalPilot() {
  return (
    <section className="section federal">
      <div className="container federal-grid">
        <div className="federal-left">
          <span className="eyebrow eyebrow-light">Standing accrued opportunity</span>
          <h2 className="display-md">A PKR 2 billion Federal Government pilot — deployed through Edison Finance.</h2>
          <p className="body-lg">
            Upon successful acquisition of the NBFC license, Edison Finance will receive a pilot
            investment of <strong>PKR 2 billion</strong> from the Federal Government, with an
            official commitment letter on record. Funds will be deployed strictly under approved
            SOPs to support micro &amp; small loans for graduates of the
            <strong> Hazza Institute of Technology</strong> — for income generation and entrepreneurship.
          </p>
          <div className="federal-pillars">
            <div className="federal-pillar">
              <div className="pillar-num">1</div>
              <div><strong>Government provides capital</strong><span>PKR 2B pilot, commitment letter on record</span></div>
            </div>
            <div className="federal-pillar">
              <div className="pillar-num">2</div>
              <div><strong>Edison executes &amp; manages</strong><span>Origination, oversight, risk administration</span></div>
            </div>
            <div className="federal-pillar">
              <div className="pillar-num">3</div>
              <div><strong>9% management charge</strong><span>Sustainable, structured financial model</span></div>
            </div>
          </div>
        </div>
        <div className="federal-right">
          <div className="commit-card">
            <div className="commit-head">
              <span className="commit-stamp">Commitment</span>
              <span className="commit-date mono">Jan 2026</span>
            </div>
            <div className="commit-amount">
              <span className="commit-cur">PKR</span>
              <span className="commit-num">2,000,000,000</span>
            </div>
            <div className="commit-bar">
              <div className="commit-bar-fill" style={{ width: '0%' }} />
              <div className="commit-bar-marker">License pending</div>
            </div>
            <div className="commit-grid">
              <div><div className="commit-l">Beneficiary</div><div className="commit-v">Hazza Institute graduates</div></div>
              <div><div className="commit-l">Vehicle</div><div className="commit-v">Edison-managed micro-loans</div></div>
              <div><div className="commit-l">Mgmt charge</div><div className="commit-v mono">9.00%</div></div>
              <div><div className="commit-l">Status</div><div className="commit-v">Awaiting license</div></div>
            </div>
            <div className="commit-foot">
              <Icon name="shield" size={16} />
              <span>SECP licensing in process · Deployment per approved SOPs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Funding() {
  const channels = [
    { ic: 'people',   t: 'Sponsor equity',           d: 'Paid-up shareholder capital from incorporators \u2014 the foundation of our balance sheet.' },
    { ic: 'building', t: 'Institutional financing',  d: 'Term financing from banks and development finance institutions, both local and international.' },
    { ic: 'moon',     t: 'Shariah-compliant channels', d: 'Sukuk, mudarabah, and other Islamic capital markets instruments aligned to our Shariah governance.' },
    { ic: 'shield',   t: 'Federal pilot capital',    d: 'PKR 2 billion commitment from the Federal Government \u2014 deployed under approved SOPs, post-license.' },
  ];
  return (
    <section className="section funding">
      <div className="container">
        <div className="funding-head">
          <span className="eyebrow">Capital structure</span>
          <h2 className="display-md">A diversified funds portfolio — built for sustainability, liquidity, and compliance.</h2>
          <p className="body-lg funding-lede">
            Edison Finance combines shareholder equity with diversified third-party financing, accessing both conventional and Shariah-compliant funding channels. The capital structure is balanced for prudent leverage, healthy liquidity buffers, and regulatory compliance.
          </p>
        </div>

        <div className="funding-channels">
          {channels.map((c, i) => (
            <div className="fund-card" key={i}>
              <span className="fund-ico"><Icon name={c.ic} size={22}/></span>
              <div className="fund-num mono">{String(i + 1).padStart(2, '0')}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>

        <div className="funding-foot">
          <Icon name="scale" size={18}/>
          <span><strong>Capital adequacy &mdash;</strong> PKR 50 million minimum paid-up share capital, deposited in a designated bank account and verified to the SECP Licensing Department.</span>
        </div>
      </div>
    </section>
  );
}

window.Products = Products;
window.FederalPilot = FederalPilot;
window.Funding = Funding;
