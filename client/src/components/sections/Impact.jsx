import Icon from '../common/Icon.jsx';

const AIMS = [
  { ic: 'spark',  t: 'Support entrepreneurship',          d: 'Capital, structure, and mentorship for the self-starters of Pakistan\'s informal economy.' },
  { ic: 'people', t: 'Generate employment opportunities', d: 'Every micro-loan deployed creates downstream jobs in shops, fields, ateliers, and routes.' },
  { ic: 'wallet', t: 'Improve financial access',          d: 'Reach underserved urban and rural communities through digital origination and on-ground partners.' },
  { ic: 'graph',  t: 'Promote inclusive economic growth', d: 'Build a broader, more resilient economic base — by lending where the conventional sector won\'t.' },
];

const FOCUS = [
  { ic: 'women',   t: 'Women empowerment',      d: 'Dedicated Qard Hasan tracks for women micro-entrepreneurs and group lending circles.' },
  { ic: 'tractor', t: 'Rural development',       d: 'Salam and agri-financing for smallholder farmers and rural cooperatives.' },
  { ic: 'graph',   t: 'Youth entrepreneurship',  d: 'Federal-backed financing for graduates of the Hazza Institute of Technology.' },
  { ic: 'chip',    t: 'Financial literacy',       d: 'Borrower education modules built into onboarding — repayment confidence, not just access.' },
];

export default function Impact({ noHead = false }) {
  return (
    <section id="impact" className="section section-dark impact">
      <div className="container">
        {!noHead && (
          <div className="impact-head">
            <span className="eyebrow eyebrow-light">Our impact</span>
            <h2 className="display-md impact-h">Driving economic empowerment — measured in livelihoods, not just loans.</h2>
            <p className="impact-lede">Edison Finance aims to bridge the financial gap for underserved segments of Pakistan&apos;s economy. Our impact is articulated by intent today, and will be measured by outcomes as our portfolio grows.</p>
          </div>
        )}
        <div className="aim-grid">
          {AIMS.map((a, i) => (
            <div className="aim-card" key={i}>
              <span className="aim-ico"><Icon name={a.ic} size={22} /></span>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
        <div className="focus-head">
          <span className="eyebrow eyebrow-light">Focus areas</span>
          <h3 className="impact-h-sub">Where our capital lands first.</h3>
        </div>
        <div className="focus-grid">
          {FOCUS.map((f, i) => (
            <div className="focus-card" key={i}>
              <span className="focus-ico"><Icon name={f.ic} size={22} /></span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
