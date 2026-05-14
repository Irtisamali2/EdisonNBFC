/* ==========================================================================
   Edison Finance — Multi-page app root
   Each page sets window.__PAGE before this script loads. We dispatch to
   the right composition of sections.
   ========================================================================== */

const TWEAK_DEFAULTS = window.__TWEAK_DEFAULTS || { palette: 'emerald', heroVariant: 'coin' };

const PALETTES = {
  emerald: { name: 'Emerald + Gold',   vars: { '--brand-500':'#16915C','--brand-600':'#0F764A','--brand-700':'#0B5C3A','--brand-800':'#084227','--brand-900':'#052B19','--brand-50':'#ECFAF1','--brand-100':'#D1F2DD','--brand-200':'#A5E3C0','--brand-300':'#6FCC9D','--brand-400':'#37B07A','--gold-300':'#E0C36A','--gold-500':'#C49A2A','--gold-600':'#A87E1A','--gold-700':'#7A5A10' } },
  navy:    { name: 'Navy + Bullion',   vars: { '--brand-500':'#2A5DAB','--brand-600':'#1F4585','--brand-700':'#173568','--brand-800':'#0F2750','--brand-900':'#0A1B3A','--brand-50':'#EAF1FB','--brand-100':'#D1DFF4','--brand-200':'#A6BFE6','--brand-300':'#739CD8','--brand-400':'#487BC4','--gold-300':'#E5C76A','--gold-500':'#C39423','--gold-600':'#9A7218','--gold-700':'#6E4F0F' } },
  terra:   { name: 'Terracotta + Sand', vars: { '--brand-500':'#B95A3C','--brand-600':'#9C432A','--brand-700':'#7B3320','--brand-800':'#5C2618','--brand-900':'#3D1A10','--brand-50':'#FCEEE7','--brand-100':'#F8DCCD','--brand-200':'#F0BAA0','--brand-300':'#E29677','--brand-400':'#CC7350','--gold-300':'#E0C36A','--gold-500':'#A88030','--gold-600':'#80601E','--gold-700':'#5A4310' } },
  forest:  { name: 'Forest + Olive',   vars: { '--brand-500':'#2C7A4E','--brand-600':'#235F3D','--brand-700':'#1B4A30','--brand-800':'#143822','--brand-900':'#0D2517','--brand-50':'#EBF4EE','--brand-100':'#CFE6D7','--brand-200':'#A6D0B5','--brand-300':'#76B790','--brand-400':'#4F9B6F','--gold-300':'#CFC468','--gold-500':'#9C9128','--gold-600':'#76701B','--gold-700':'#524E0F' } },
};

function applyPalette(key) {
  const p = PALETTES[key]; if (!p) return;
  const root = document.documentElement;
  Object.entries(p.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="page-header">
      <div className="page-header-bg">
        <div className="hero-grid"/>
        <div className="hero-blob hero-blob-1"/>
      </div>
      <div className="container page-header-inner">
        <div className="page-header-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-md page-header-title">{title}</h1>
          {lede && <p className="body-lg page-header-lede">{lede}</p>}
        </div>
        <div className="page-header-mark">
          <EdisonMark size={160} variant="light" />
        </div>
      </div>
    </section>
  );
}

/* ---- Page-level CTA before the footer ---------------------------- */
function CTASection() {
  return (
    <section className="cta-band">
      <div className="container cta-row">
        <div>
          <span className="eyebrow eyebrow-light">Ready to apply?</span>
          <h2 className="display-md cta-h">Start your financing application — it takes about 4 minutes.</h2>
        </div>
        <div className="cta-actions">
          <a href="apply.html" className="btn btn-primary">Apply for financing <Icon name="arrow-right" size={16}/></a>
          <a href="contact.html" className="btn btn-secondary btn-on-dark">Talk to our team</a>
        </div>
      </div>
    </section>
  );
}

window.PageHeader = PageHeader;
window.CTASection = CTASection;

/* ---- Page compositions ----------------------------------------- */
const PAGES = {
  home: () => (
    <>
      <Hero variant={window.__tweaks?.heroVariant || 'coin'} />
      <HighlightStrip />
      <AboutSnapshot />
      <ProductsPreview />
      <FederalPilot />
      <ImpactPreview />
      <CTASection />
    </>
  ),
  about: () => (
    <>
      <PageHeader eyebrow="About Edison Finance" title="A microfinance NBFC built for the entrepreneurs who power Pakistan." lede="Incorporated on 14 January 2026 under the Companies Act, 2017. Registered with the Securities and Exchange Commission of Pakistan."/>
      <About noHead />
      <HybridModel />
      <RegulatoryStatus />
      <CTASection />
    </>
  ),
  strategy: () => (
    <>
      <PageHeader eyebrow="Our strategy" title="A phased path from district pilots to nationwide scale." lede="Strategic positioning, growth phases, and the objectives that shape how we lend and where."/>
      <StrategicPositioning />
      <Strategy noHead />
      <CTASection />
    </>
  ),
  products: () => (
    <>
      <PageHeader eyebrow="Products & services" title="A complete financing toolkit — for the way Pakistan actually borrows." lede="Conventional and Shariah-compliant products across enterprise, agriculture, consumer, and digital segments."/>
      <Products noHead />
      <Funding />
      <Calculator />
      <CTASection />
    </>
  ),
  impact: () => (
    <>
      <PageHeader eyebrow="Our impact" title="Driving economic empowerment — measured in livelihoods." lede="What we aim to do, where our capital lands first, and how the Federal Government pilot fits in."/>
      <Impact noHead />
      <FederalPilot />
      <CTASection />
    </>
  ),
  apply: () => (
    <>
      <PageHeader eyebrow="Apply for financing" title="Start your application." lede="Submissions are reviewed once Edison Finance receives its NBFC license (expected July 2026). Early applicants are prioritised in our pilot district rollout."/>
      <Apply noHead />
    </>
  ),
  contact: () => (
    <>
      <PageHeader eyebrow="Contact" title="Talk to our team." lede="Partnerships, media, careers, and capital — we respond within two working days."/>
      <Contact noHead />
    </>
  ),
};

function App() {
  const t = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => { window.__tweaks = t; });

  const page = window.__PAGE || 'home';
  const Render = PAGES[page] || PAGES.home;
  const active = page;

  return (
    <>
      <Announcement />
      <TopNav active={active} />
      <main>{Render()}</main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand palette">
          <TweakSelect
            label="Palette"
            value={t.palette}
            onChange={(v) => t.setTweak('palette', v)}
            options={Object.entries(PALETTES).map(([k, v]) => ({ value: k, label: v.name }))}
          />
        </TweakSection>
        <TweakSection title="Home hero">
          <TweakRadio
            value={t.heroVariant}
            onChange={(v) => t.setTweak('heroVariant', v)}
            options={[
              { value: 'coin', label: '3D coin' },
              { value: 'cards', label: 'Stacked cards' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
