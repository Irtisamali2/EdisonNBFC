export default function About({ noHead = false }) {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-left">
          {!noHead ? (
            <>
              <span className="eyebrow">About Edison Finance</span>
              <h2 className="display-md">A microfinance NBFC built for the entrepreneurs who power Pakistan&apos;s informal economy.</h2>
            </>
          ) : (
            <span className="eyebrow">Company overview</span>
          )}
        </div>
        <div className="about-right">
          <p className="body-lg">
            Edison Finance (Private) Limited is a Pakistan-based microfinance NBFC, incorporated on{' '}
            <strong>14 January 2026</strong> in Islamabad under the Companies Act, 2017. We bridge
            the financial gap for individuals, small businesses, farmers, and underserved communities
            — through both Shariah-compliant and conventional financing.
          </p>
          <p className="body-lg">
            Our hybrid model lets us serve diverse customer preferences while honouring the ethical and
            risk standards Pakistan&apos;s financial sector demands. We are commercially viable and
            socially anchored — built to last.
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
