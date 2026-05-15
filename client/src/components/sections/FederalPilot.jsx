import Icon from '../common/Icon.jsx';

export default function FederalPilot() {
  return (
    <section className="section federal">
      <div className="container federal-grid">
        <div className="federal-left">
          <span className="eyebrow eyebrow-light">Standing accrued opportunity</span>
          <h2 className="display-md">A PKR 2 billion Federal Government pilot — deployed through Edison Finance.</h2>
          <p className="body-lg">
            Upon successful acquisition of the NBFC license, Edison Finance will receive a pilot investment
            of <strong>PKR 2 billion</strong> from the Federal Government, with an official commitment letter
            on record. Funds will be deployed strictly under approved SOPs to support micro &amp; small loans
            for graduates of the <strong> Hazza Institute of Technology</strong> — for income generation and entrepreneurship.
          </p>
          <div className="federal-pillars">
            {[
              { n: 1, t: 'Government provides capital', s: 'PKR 2B pilot, commitment letter on record' },
              { n: 2, t: 'Edison executes & manages',   s: 'Origination, oversight, risk administration' },
              { n: 3, t: '9% management charge',        s: 'Sustainable, structured financial model' },
            ].map((p) => (
              <div className="federal-pillar" key={p.n}>
                <div className="pillar-num">{p.n}</div>
                <div><strong>{p.t}</strong><span>{p.s}</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="federal-right">
          <div className="commit-card" data-reveal>
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
