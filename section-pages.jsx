/* ==========================================================================
   Edison Finance — Page-header + Home teasers + Governance/Sponsors
   ========================================================================== */

function PageHeader({ eyebrow, title, sub, breadcrumb }) {
  return (
    <section className="page-header">
      <div className="page-header-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
      </div>
      <div className="container page-header-inner">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-lg ph-title">{title}</h1>
        {sub && <p className="body-lg ph-sub">{sub}</p>}
      </div>
    </section>
  );
}

/* ---- Home page: About teaser ------------------------------------- */
function AboutTeaser() {
  return (
    <section className="section section-cream about-teaser">
      <div className="container at-grid">
        <div className="at-left">
          <span className="eyebrow">About Edison Finance</span>
          <h2 className="display-md">A microfinance NBFC built for Pakistan&apos;s informal economy.</h2>
          <p className="body-lg">
            Edison Finance (Private) Limited is a Pakistan-based microfinance NBFC,
            incorporated on <strong>14 January 2026</strong> in Islamabad under the
            Companies Act, 2017. We bridge the financial gap for individuals, small
            businesses, farmers, and underserved communities — through both
            Shariah-compliant and conventional financing.
          </p>
          <div className="at-ctas">
            <a href="about.html" className="btn btn-primary">Read our story <Icon name="arrow-right" size={16}/></a>
            <a href="strategy.html" className="btn btn-secondary">Our strategy</a>
          </div>
        </div>
        <div className="at-right">
          <div className="at-card">
            <div className="at-card-h">
              <span className="vm-tag">Vision</span>
            </div>
            <p>Responsible, inclusive, and ethical financial services that empower micro-entrepreneurs toward economic self-reliance and socio-economic uplift.</p>
          </div>
          <div className="at-card at-card-dark">
            <div className="at-card-h">
              <span className="vm-tag vm-tag-dark">Mission</span>
            </div>
            <ul>
              <li>Focus on micro-entrepreneurs in urban &amp; low-income communities</li>
              <li>Accessible, affordable, ethically structured finance</li>
              <li>Both Shariah-compliant and conventional solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Home page: Products teaser ---------------------------------- */
function ProductsTeaser() {
  const items = [
    { ic: 'store',   t: 'Small Enterprise', d: 'Working capital and growth financing for shopkeepers and micro-businesses.', m: 'Shariah · Conventional' },
    { ic: 'tractor', t: 'Agriculture', d: 'Salam and conventional agri-loans for smallholder farmers and rural cooperatives.', m: 'Shariah · Conventional' },
    { ic: 'women',   t: 'Qard Hasan', d: 'Interest-free goodwill loans for women micro-entrepreneurs and first-time borrowers.', m: 'Shariah' },
    { ic: 'bike',    t: 'EV Bike Financing', d: 'Green-mobility lease for electric two-wheelers — structured monthly instalments.', m: 'Conventional' },
  ];
  return (
    <section className="section products products-teaser">
      <div className="container">
        <div className="products-head">
          <div>
            <span className="eyebrow">Products &amp; services</span>
            <h2 className="display-md">A complete financing toolkit — for the way Pakistan actually borrows.</h2>
          </div>
          <a href="products.html" className="btn btn-secondary">See all products <Icon name="arrow-right" size={16}/></a>
        </div>
        <div className="products-grid">
          {items.map((p, i) => (
            <a href="products.html" className="product-card card card-interactive" key={i}>
              <div className="product-top">
                <span className="product-ico"><Icon name={p.ic} size={22} /></span>
                <span className="product-mode">{p.m}</span>
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="product-cta">Learn more <Icon name="arrow-up-right" size={14}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Home page: Impact teaser ----------------------------------- */
function ImpactTeaser() {
  const counters = [
    { v: 25000, p: '+', l: 'Micro-entrepreneurs to be served · year 1' },
    { v: 60,   p: '%',  l: 'Portfolio earmarked for women borrowers' },
    { v: 12,    p: '',  l: 'Districts in initial rollout' },
    { v: 100,    p: '%', l: 'Digital origination by year 2' },
  ];
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="section section-dark impact impact-teaser">
      <div className="container">
        <div className="impact-head">
          <span className="eyebrow eyebrow-light">Our impact</span>
          <h2 className="display-md impact-h">Measured in livelihoods, not just loans.</h2>
        </div>
        <div className="impact-stats" ref={ref}>
          {counters.map((c, i) => (
            <div className="istat" key={i}>
              <div className="istat-num">
                {seen ? <Counter to={c.v}/> : 0}<span className="istat-suffix">{c.p}</span>
              </div>
              <div className="istat-l">{c.l}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: 32}}>
          <a href="impact.html" className="btn btn-on-dark">Explore our impact <Icon name="arrow-right" size={16}/></a>
        </div>
      </div>
    </section>
  );
}

/* ---- CTA banner ----------------------------------------------- */
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-row">
        <div>
          <h2 className="display-md">Ready to apply?</h2>
          <p className="body-lg">Start your application in under 4 minutes. Hazza Institute graduates are fast-tracked through our Federal pilot.</p>
        </div>
        <div className="cta-actions">
          <a href="apply.html" className="btn btn-primary">Apply for financing <Icon name="arrow-right" size={16}/></a>
          <a href="contact.html" className="btn btn-secondary">Talk to our team</a>
        </div>
      </div>
    </section>
  );
}

/* ---- Sponsors + Governance (About page) ------------------------- */
function Sponsors() {
  const list = [
    { name: 'Mr. Azhar Ikbal',          role: 'Founder & Principal Sponsor', share: 65, initials: 'AI', bio: 'Driving Edison Finance\u2019s vision for ethical, inclusive microfinance across Pakistan.' },
    { name: 'Mr. Muhammad Haseeb Azhar', role: 'Co-Sponsor & Director',       share: 35, initials: 'HA', bio: 'Operations and strategic partnerships, with a focus on digital infrastructure for outreach.' },
    { name: 'Ms. Amna Azhar',           role: 'Qualifying Shareholder',       share: 0.000000020, initials: 'AA', bio: 'Holds qualifying share interest per the Companies Act, 2017.' },
  ];
  return (
    <section id="sponsors" className="section sponsors">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Sponsors &amp; shareholding</span>
          <h2 className="display-md">The principals behind Edison Finance.</h2>
        </div>
        <div className="sponsors-grid">
          {list.map((s, i) => (
            <article className="sponsor-card" key={i}>
              <div className="sponsor-avatar">{s.initials}</div>
              <div className="sponsor-share">
                <span className="sponsor-share-v mono">{s.share < 1 ? '0.0000…%' : `${s.share}%`}</span>
                <span className="sponsor-share-l">Shareholding</span>
              </div>
              <h3>{s.name}</h3>
              <div className="sponsor-role">{s.role}</div>
              <p>{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Governance() {
  const items = [
    { t: 'Companies Act, 2017', d: 'Incorporated 14 January 2026 in Islamabad. CUIN 0322716.' },
    { t: 'SECP licensing track', d: 'Commissioner Licensing & Registration order dated 07 January 2026 under Rule 4(2) of the NBFC Establishment & Regulations Rules 2003.' },
    { t: 'Paid-up capital', d: 'Minimum PKR 50 million deposited in designated bank account, bank statements submitted to the SECP Licensing Department as proof of capital adequacy.' },
    { t: 'License fee', d: 'Non-refundable PKR 760,000 paid at application submission.' },
    { t: 'Shariah governance', d: 'Independent Shariah supervisory framework for compliant products (Murabaha, Salam, Qard Hasan, Takaful).' },
    { t: 'Risk & compliance', d: 'Conventional risk-management frameworks aligned to SECP standards alongside Shariah governance.' },
  ];
  return (
    <section id="governance" className="section section-cream governance">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Governance &amp; compliance</span>
          <h2 className="display-md">A licensed-first foundation — built to last.</h2>
        </div>
        <div className="gov-grid">
          {items.map((it, i) => (
            <div className="gov-card" key={i}>
              <div className="gov-num mono">{String(i + 1).padStart(2, '0')}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Regulatory timeline (About page) --------------------------- */
function RegTimeline() {
  const steps = [
    { d: '07 Jan 2026', t: 'SECP Commissioner order', s: 'Permission to apply for NBFC microfinancing license — Rule 4(2), NBFC Rules 2003.' },
    { d: '14 Jan 2026', t: 'Company incorporated', s: 'Edison Finance (Private) Limited registered with SECP. CUIN 0322716.', on: true },
    { d: 'Q1 2026',     t: 'Paid-up capital deposited', s: 'PKR 50M placed in designated bank account; statements filed with SECP.' },
    { d: 'Q2 2026',     t: 'License application submitted', s: 'PKR 760,000 non-refundable license fee paid; documentation submitted to SECP.' },
    { d: 'Jul 2026',    t: 'NBFC license granted', s: 'Six-month statutory window closes 07 July 2026. Operations commence.' },
    { d: 'H2 2026',     t: 'Federal pilot deployment', s: 'PKR 2B Government pilot for Hazza Institute graduates begins.' },
  ];
  return (
    <section id="regulatory" className="section reg">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Regulatory journey</span>
          <h2 className="display-md">From incorporation to licensed launch.</h2>
        </div>
        <div className="reg-line">
          {steps.map((s, i) => (
            <div className={`reg-step ${s.on ? 'reg-step-on' : ''}`} key={i}>
              <div className="reg-dot" />
              <div className="reg-card">
                <div className="reg-date mono">{s.d}</div>
                <h3>{s.t}</h3>
                <p>{s.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PageHeader = PageHeader;
window.AboutTeaser = AboutTeaser;
window.ProductsTeaser = ProductsTeaser;
window.ImpactTeaser = ImpactTeaser;
window.CTABanner = CTABanner;
window.Sponsors = Sponsors;
window.Governance = Governance;
window.RegTimeline = RegTimeline;
