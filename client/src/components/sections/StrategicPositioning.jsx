const AIMS = [
  'Promote financial inclusion',
  'Drive social empowerment',
  'Enable sustainable economic growth',
  'Foster micro-entrepreneurship',
];

export default function StrategicPositioning() {
  return (
    <section className="section sp">
      <div className="container sp-grid">
        <div>
          <span className="eyebrow">Strategic positioning</span>
          <h2 className="display-md sp-h">Aiming for financial inclusion, social empowerment, and sustainable growth.</h2>
        </div>
        <div className="sp-right">
          <ul className="sp-aims">
            {AIMS.map((a, i) => (
              <li key={i}><span className="sp-num mono">{String(i + 1).padStart(2, '0')}</span>{a}</li>
            ))}
          </ul>
          <p className="body-lg sp-target">
            <strong>Target market:</strong> low-income individuals, small-scale farmers, and micro-entrepreneurs in rural and urban Pakistan.
          </p>
          <p className="body-lg sp-target">
            <strong>Growth strategy:</strong> a phased approach — begin with selected districts, gradually expand nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}
