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
          <div className="about-stats" data-stagger>
            <div>
              <div className="stat-num">Jan 2026</div>
              <div className="stat-lbl">Incorporated under Companies Act, 2017</div>
            </div>
            <div>
              <div className="stat-num">Jul 2026</div>
              <div className="stat-lbl">Expected SECP NBFC license</div>
            </div>
            <div>
              <div className="stat-num">3</div>
              <div className="stat-lbl">Sponsor shareholders · majority resident</div>
            </div>
          </div>
          <div className="vm-grid" data-stagger>
            <div className="vm-card">
              <div className="vm-tag">Vision</div>
              <p>Provide responsible, inclusive, and ethical financial services that empower micro-entrepreneurs to achieve economic self-reliance and socio-economic uplift.</p>
            </div>
            <div className="vm-card vm-card-dark">
              <div className="vm-tag vm-tag-dark">Mission</div>
              <ul>
                <li>Focus on micro-entrepreneurs from urban &amp; low-income communities</li>
                <li>Unlock their potential through accessible, affordable, and ethically structured financial solutions</li>
                <li>Offer both Shariah-compliant and conventional microfinance products</li>
                <li>Promote financial literacy and socio-economic uplift of underserved segments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
