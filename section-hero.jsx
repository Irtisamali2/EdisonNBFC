/* ==========================================================================
   Edison Finance — Top-level sections
   ========================================================================== */

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ---- Top Nav ------------------------------------------------------ */
function TopNav() {
  const [scrolled, setScrolled] = useStateS(false);
  const [open, setOpen] = useStateS(false);
  useEffectS(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['About', 'about.html'],
    ['Strategy', 'strategy.html'],
    ['Products', 'products.html'],
    ['Impact', 'impact.html'],
    ['Calculator', 'products.html#calculator'],
    ['Contact', 'contact.html'],
  ];
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="index.html" className="brand-link" aria-label="Edison Finance home">
          <EdisonLockup size="sm" variant="light" />
        </a>

        <nav className="nav-links">
          {links.map(([l, h]) => {
            const target = h.split('#')[0].toLowerCase();
            const active = target === here;
            return <a key={h} href={h} className={active ? 'nav-active' : ''}>{l}</a>;
          })}
        </nav>

        <div className="nav-cta">
          <a href="apply.html" className="btn btn-primary btn-sm">
            Apply for financing <Icon name="arrow-right" size={16} />
          </a>
        </div>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="apply.html" className="btn btn-primary" onClick={() => setOpen(false)}>Apply for financing</a>
        </div>
      )}
    </header>
  );
}

/* ---- Announcement bar ---------------------------------------------- */
function Announcement() {
  return (
    <div className="announce">
      <div className="container announce-row">
        <span className="announce-dot" />
        <span><strong>Licensing in progress —</strong> SECP NBFC license expected by July 2026.</span>
        <a href="about.html#regulatory" className="announce-link">Regulatory journey <Icon name="arrow-right" size={12}/></a>
      </div>
    </div>
  );
}

/* ---- Hero ---------------------------------------------------------- */
function Hero({ variant, compact }) {
  return (
    <section id="top" className={`hero ${compact ? 'hero-compact' : ''}`}>
      <div className="hero-bg">
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
            <a href="apply.html" className="btn btn-primary">
              Apply for financing <Icon name="arrow-right" size={16} />
            </a>
            <a href="products.html" className="btn btn-secondary">
              Explore our products
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-num mono">CUIN 0322716</div>
              <div className="trust-lbl">SECP-incorporated · Jan 2026</div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <div className="trust-num mono">PKR 2.0B</div>
              <div className="trust-lbl">Federal Government pilot commitment</div>
            </div>
            <div className="trust-divider" />
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

      <div className="hero-marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
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
function Dot() { return <span className="m-dot" aria-hidden="true">◆</span>; }

window.TopNav = TopNav;
window.Announcement = Announcement;
window.Hero = Hero;
