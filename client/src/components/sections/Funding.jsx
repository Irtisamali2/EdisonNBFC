import Icon from '../common/Icon.jsx';

const CHANNELS = [
  { ic: 'people',   t: 'Sponsor equity',            d: 'Paid-up shareholder capital from incorporators — the foundation of our balance sheet.' },
  { ic: 'building', t: 'Institutional financing',   d: 'Term financing from banks and development finance institutions, both local and international.' },
  { ic: 'moon',     t: 'Shariah-compliant channels', d: 'Sukuk, mudarabah, and other Islamic capital markets instruments aligned to our Shariah governance.' },
  { ic: 'shield',   t: 'Federal pilot capital',     d: 'PKR 2 billion commitment from the Federal Government — deployed under approved SOPs, post-license.' },
];

export default function Funding() {
  return (
    <section className="section funding">
      <div className="container">
        <div className="funding-head">
          <span className="eyebrow">Capital structure</span>
          <h2 className="display-md">A diversified funds portfolio — built for sustainability, liquidity, and compliance.</h2>
          <p className="body-lg funding-lede">
            Edison Finance combines shareholder equity with diversified third-party financing, accessing both
            conventional and Shariah-compliant funding channels. The capital structure is balanced for prudent
            leverage, healthy liquidity buffers, and regulatory compliance.
          </p>
        </div>
        <div className="funding-channels">
          {CHANNELS.map((c, i) => (
            <div className="fund-card" key={i}>
              <span className="fund-ico"><Icon name={c.ic} size={22} /></span>
              <div className="fund-num mono">{String(i + 1).padStart(2, '0')}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
        <div className="funding-foot">
          <Icon name="scale" size={18} />
          <span><strong>Capital adequacy —</strong> PKR 50 million minimum paid-up share capital, deposited in a designated bank account and verified to the SECP Licensing Department.</span>
        </div>
      </div>
    </section>
  );
}
