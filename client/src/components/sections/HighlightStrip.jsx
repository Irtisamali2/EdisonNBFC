import Icon from '../common/Icon.jsx';

const ITEMS = [
  { icon: 'scale',   t: 'Hybrid model',      s: 'Shariah-compliant + conventional' },
  { icon: 'people',  t: 'Inclusive',          s: 'Urban + rural underserved communities' },
  { icon: 'chip',    t: 'Digital-first',      s: 'Tech-driven outreach & operations' },
  { icon: 'shield',  t: 'Ethical financing',  s: 'Responsible, transparent practices' },
  { icon: 'globe',   t: 'Phased growth',      s: 'Districts → nationwide coverage' },
];

export default function HighlightStrip() {
  return (
    <section className="strip">
      <div className="container strip-row">
        {ITEMS.map((it, i) => (
          <div className="strip-item" key={i}>
            <span className="strip-ico"><Icon name={it.icon} /></span>
            <div>
              <div className="strip-t">{it.t}</div>
              <div className="strip-s">{it.s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
