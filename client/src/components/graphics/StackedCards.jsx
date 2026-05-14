export default function StackedCards() {
  return (
    <div className="stack-stage" aria-hidden="true">
      <div className="stack-glow" />
      <div className="stack-card stack-card-3">
        <div className="stack-card-row"><span>Salam financing</span><span className="mono">PKR 250,000</span></div>
        <div className="stack-card-bar" style={{ width: '60%' }} />
        <div className="stack-card-meta">Approved · 24m tenor</div>
      </div>
      <div className="stack-card stack-card-2">
        <div className="stack-card-row"><span>EV bike lease</span><span className="mono">PKR 180,000</span></div>
        <div className="stack-card-bar" style={{ width: '78%' }} />
        <div className="stack-card-meta">Disbursed · 18m tenor</div>
      </div>
      <div className="stack-card stack-card-1">
        <div className="stack-card-row">
          <div>
            <div className="stack-card-label">Approved disbursement</div>
            <div className="stack-card-amt">PKR 1,50,000</div>
          </div>
          <div className="stack-card-pill">Qard Hasan</div>
        </div>
        <div className="stack-card-divider" />
        <div className="stack-card-grid">
          <div><div className="stack-card-meta">Tenor</div><div className="stack-card-val">12 months</div></div>
          <div><div className="stack-card-meta">EMI</div><div className="stack-card-val">PKR 12,500</div></div>
          <div><div className="stack-card-meta">Sector</div><div className="stack-card-val">Tailoring</div></div>
        </div>
      </div>
    </div>
  );
}
