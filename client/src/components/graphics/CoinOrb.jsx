import { useEffect } from 'react';
import Icon from '../common/Icon.jsx';

function FloatingChip({ className, icon, label }) {
  return (
    <div className={`f-chip ${className}`}>
      <span className="f-chip-ico"><Icon name={icon} size={16} /></span>
      <span>{label}</span>
    </div>
  );
}

export default function CoinOrb({ size }) {
  const style = size ? { width: size, height: size } : { width: '100%', height: '100%' };

  useEffect(() => {
    const group = document.getElementById('mint-marks');
    if (!group || group.children.length > 0) return;
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      const line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', (100 + Math.cos(a) * 92).toFixed(2));
      line.setAttribute('y1', (100 + Math.sin(a) * 92).toFixed(2));
      line.setAttribute('x2', (100 + Math.cos(a) * 96).toFixed(2));
      line.setAttribute('y2', (100 + Math.sin(a) * 96).toFixed(2));
      line.setAttribute('stroke', 'rgba(122,90,16,0.55)');
      line.setAttribute('stroke-width', '0.9');
      group.appendChild(line);
    }
  }, []);

  return (
    <div className="orb-stage" style={style} aria-hidden="true">
      <div className="orb-glow" />
      <div className="orb-ring" style={{ inset: '8%' }} />
      <div className="orb-ring" style={{ inset: '18%', animationDelay: '0.6s' }} />
      <div className="orb-ring" style={{ inset: '28%', animationDelay: '1.2s' }} />

      <div className="coin">
        <div className="coin-face coin-back" />
        <div className="coin-edge" />
        <div className="coin-face coin-front">
          <svg id="coin-svg" viewBox="0 0 200 200" width="100%" height="100%">
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
            <g transform="translate(100 100)">
              <g fill="#0B5C3A">
                <rect x="-30" y="-36" width="56" height="9" rx="1.5" />
                <rect x="-30" y="-4.5" width="40" height="9" rx="1.5" />
                <rect x="-30" y="27" width="56" height="9" rx="1.5" />
                <rect x="-30" y="-36" width="9" height="72" rx="1.5" />
              </g>
              <circle cx="16" cy="0" r="5" fill="#0B5C3A" />
              <circle cx="16" cy="0" r="8" fill="#0B5C3A" opacity="0.18" />
            </g>
            <g id="mint-marks" />
          </svg>
        </div>
      </div>

      <div className="orb-chips">
        <FloatingChip className="chip-tl" icon="seedling" label="Microfinance" />
        <FloatingChip className="chip-tr" icon="moon" label="Shariah-compliant" />
        <FloatingChip className="chip-br" icon="leaf" label="EV financing" />
        <FloatingChip className="chip-bl" icon="women" label="Women entrepreneurs" />
      </div>
    </div>
  );
}
