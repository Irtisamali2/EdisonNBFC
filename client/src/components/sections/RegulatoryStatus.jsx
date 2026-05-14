import Icon from '../common/Icon.jsx';

const ITEMS = [
  { l: 'Incorporation',       v: 'Companies Act, 2017',   d: 'Duly incorporated under the provisions of the Companies Act, 2017.' },
  { l: 'Registered with',     v: 'SECP',                  d: 'Securities and Exchange Commission of Pakistan.' },
  { l: 'CUIN',                v: '0322716',               d: 'Corporate Unique Identification Number.' },
  { l: 'Incorporated on',     v: '14 January 2026',       d: 'Registered office at Islamabad.' },
  { l: 'Commissioner order',  v: '07 January 2026',       d: 'Permission under rule 4(2) of the NBFCs Establishment and Regulations Rules, 2003.' },
  { l: 'License window',      v: '6 months',              d: 'License must be obtained by 7 July 2026 (inclusive).' },
  { l: 'Paid-up share capital', v: 'PKR 50,000,000',      d: 'Minimum statutory paid-up share capital to be deposited and verified to SECP.' },
  { l: 'License fee',         v: 'PKR 760,000',           d: 'Non-refundable, payable at the time of application submission.' },
];

export default function RegulatoryStatus() {
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
          {ITEMS.map((r, i) => (
            <div className="reg-row" key={i}>
              <div className="reg-l">{r.l}</div>
              <div className="reg-v"><strong>{r.v}</strong><span>{r.d}</span></div>
            </div>
          ))}
        </div>
        <div className="reg-foot">
          <Icon name="shield" size={18} />
          <span>Upon successful evaluation and fulfilment of all regulatory conditions, the NBFC license shall be granted for a specified period, subject to compliance with the prevailing laws and regulatory framework.</span>
        </div>
      </div>
    </section>
  );
}
