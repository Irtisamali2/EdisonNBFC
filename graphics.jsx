/* ==========================================================================
   3D-style assets and decorative components for Edison Finance
   Pure CSS / SVG — no external dependencies
   ========================================================================== */

const { useEffect, useRef, useState } = React;

/* -------- 3D Coin orb (hero centerpiece) ----------------------------- */
function CoinOrb({ size }) {
  const style = size ? { width: size, height: size } : { width: '100%', height: '100%' };
  return (
    <div className="orb-stage" style={style}>
      {/* radial glow backdrop */}
      <div className="orb-glow" />
      {/* concentric rings */}
      <div className="orb-ring" style={{ inset: '8%' }} />
      <div className="orb-ring" style={{ inset: '18%', animationDelay: '0.6s' }} />
      <div className="orb-ring" style={{ inset: '28%', animationDelay: '1.2s' }} />

      {/* the coin (rotates / floats) */}
      <div className="coin">
        <div className="coin-face coin-back" />
        <div className="coin-edge" />
        <div className="coin-face coin-front">
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
              <radialGradient id="coinShine" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FBF6E7" />
                <stop offset="35%" stopColor="#E0C36A" />
                <stop offset="75%" stopColor="#A87E1A" />
                <stop offset="100%" stopColor="#7A5A10" />
              </radialGradient>
              <linearGradient id="coinRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBF6E7" />
                <stop offset="50%" stopColor="#C49A2A" />
                <stop offset="100%" stopColor="#7A5A10" />
              </linearGradient>
              <radialGradient id="coinSpec" cx="30%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="98" fill="url(#coinShine)" />
            <circle cx="100" cy="100" r="98" fill="url(#coinSpec)" />
            <circle cx="100" cy="100" r="98" fill="none" stroke="url(#coinRim)" strokeWidth="3" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(122,90,16,0.35)" strokeWidth="1" />
            {/* Edison "E" monogram + filament dot, matched to brand mark */}
            <g transform="translate(100 100)">
              <g fill="#0B5C3A">
                <rect x="-30" y="-36" width="56" height="9" rx="1.5" />
                <rect x="-30" y="-4.5" width="40" height="9" rx="1.5" />
                <rect x="-30" y="27" width="56" height="9" rx="1.5" />
                <rect x="-30" y="-36" width="9" height="72" rx="1.5" />
              </g>
              {/* filament dot at middle arm */}
              <circle cx="16" cy="0" r="5" fill="#0B5C3A" />
              <circle cx="16" cy="0" r="8" fill="#0B5C3A" opacity="0.18" />
            </g>
            {/* milled-edge mint marks */}
            {Array.from({ length: 48 }).map((_, i) => {
              const a = (i / 48) * Math.PI * 2;
              const r1 = 92, r2 = 96;
              const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
              const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(122,90,16,0.55)" strokeWidth="0.9" />;
            })}
          </svg>
        </div>
      </div>

      {/* floating chips (outside the spinning coin so labels stay upright) */}
      <div className="orb-chips">
        <FloatingChip className="chip-tl" icon="seedling" label="Microfinance" />
        <FloatingChip className="chip-tr" icon="moon" label="Shariah-compliant" />
        <FloatingChip className="chip-br" icon="leaf" label="EV financing" />
        <FloatingChip className="chip-bl" icon="women" label="Women entrepreneurs" />
      </div>
    </div>
  );
}

function FloatingChip({ className, icon, label }) {
  return (
    <div className={`f-chip ${className}`}>
      <span className="f-chip-ico">
        <Icon name={icon} />
      </span>
      <span>{label}</span>
    </div>
  );
}

/* -------- 3D stacked-cards visual (alt hero variant) --------------- */
function StackedCards() {
  return (
    <div className="stack-stage">
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

/* -------- Inline icon set (currentColor) ---------------------------- */
function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'seedling': return (<svg {...common}><path d="M12 22V12M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 12c0-4 3-6 7-6 0 4-3 6-7 6z"/></svg>);
    case 'moon': return (<svg {...common}><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>);
    case 'leaf': return (<svg {...common}><path d="M11 20A7 7 0 0 1 4 13c0-7 8-10 16-10 0 8-3 17-9 17-2 0-4-1-4-3 0-3 4-6 9-7"/></svg>);
    case 'women': return (<svg {...common}><circle cx="12" cy="6" r="3"/><path d="M9 22v-5h-2l3-7h4l3 7h-2v5"/></svg>);
    case 'arrow-right': return (<svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'arrow-up-right': return (<svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case 'check': return (<svg {...common}><path d="M5 13l4 4L19 7"/></svg>);
    case 'shield': return (<svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
    case 'scale': return (<svg {...common}><path d="M12 3v18M5 9l-3 7c0 2 2 3 4 3s4-1 4-3l-3-7M19 9l-3 7c0 2 2 3 4 3s4-1 4-3l-3-7M3 6h18"/></svg>);
    case 'building': return (<svg {...common}><path d="M3 21h18M5 21V5l7-2 7 2v16M9 9h2M9 13h2M9 17h2M14 9h2M14 13h2M14 17h2"/></svg>);
    case 'tractor': return (<svg {...common}><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="2"/><path d="M3 13h6V8h7l3 4v3M9 8V5h5"/></svg>);
    case 'bike': return (<svg {...common}><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9h4l4 9M10 8h2M14 8l-2 6"/></svg>);
    case 'store': return (<svg {...common}><path d="M3 9l1-5h16l1 5M3 9v11h18V9M3 9c0 2 2 3 4 2 1 1 4 1 5 0 1 1 4 1 5 0 2 1 4 0 4-2"/></svg>);
    case 'wallet': return (<svg {...common}><path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H5a2 2 0 0 1 0-4h12v3"/><circle cx="17" cy="14" r="1.2" fill="currentColor"/></svg>);
    case 'graph': return (<svg {...common}><path d="M3 3v18h18M7 15l4-4 3 3 5-6"/></svg>);
    case 'phone': return (<svg {...common}><path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3.09a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case 'mail': return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
    case 'pin': return (<svg {...common}><path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>);
    case 'spark': return (<svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>);
    case 'menu': return (<svg {...common}><path d="M4 6h16M4 12h16M4 18h16"/></svg>);
    case 'close': return (<svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>);
    case 'globe': return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
    case 'chip': return (<svg {...common}><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M3 9h3M3 15h3M21 9h-3M21 15h-3"/></svg>);
    case 'people': return (<svg {...common}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4s2 2 2 4"/></svg>);
    case 'tag': return (<svg {...common}><path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor"/></svg>);
    default: return null;
  }
}

window.CoinOrb = CoinOrb;
window.StackedCards = StackedCards;
window.Icon = Icon;
