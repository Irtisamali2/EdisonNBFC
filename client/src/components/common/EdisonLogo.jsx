export function EdisonMark({ size = 40, variant = 'light' }) {
  const src = variant === 'dark' ? '/assets/edison-mark-dark.png' : '/assets/edison-mark.png';
  return (
    <img
      className="ed-mark-img"
      src={src}
      alt="Edison Finance"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}

export function EdisonLockup({ variant = 'light', size = 'md', showTagline = true }) {
  const markSize = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  return (
    <span className={`ed-lockup ed-lockup-${size} ${variant === 'dark' ? 'ed-lockup-dark' : 'ed-lockup-light'}`}>
      <EdisonMark size={markSize} variant={variant === 'dark' ? 'dark' : 'light'} />
      <span className="ed-text">
        <span className="ed-word">Edison Finance</span>
        {showTagline && <span className="ed-sub">Microfinance · NBFC</span>}
      </span>
    </span>
  );
}
