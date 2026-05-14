/* ==========================================================================
   Edison Finance — Brand lockup
   Uses the official mark provided by Edison Finance (asset PNG).
   Pairs with a horizontal typeset wordmark in Plex Sans 700 to match the
   bold geometric letterforms of the official lockup.
   ========================================================================== */

/* Mark image — use the brand asset for light/dark backgrounds */
function EdisonMark({ size = 40, variant = 'light' }) {
  const src = variant === 'dark' ? 'assets/edison-mark-dark.png' : 'assets/edison-mark.png';
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

/* Build helper kept for backwards compatibility with existing call-sites */
function buildEdisonMark({ size = 40, variant = 'primary' }) {
  // Map old "primary" variant name to the new image-based light mark
  const v = variant === 'primary' || variant === 'light' || variant === 'mono-dark' ? 'light' : 'dark';
  return <EdisonMark size={size} variant={v} />;
}

/* Horizontal lockup: image mark + typeset wordmark + tagline */
function EdisonLockup({ variant = 'light', size = 'md', showTagline = true }) {
  const markSize = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  const sizeClass = `ed-lockup-${size}`;
  const variantClass = variant === 'dark' ? 'ed-lockup-dark' : 'ed-lockup-light';
  return (
    <span className={`ed-lockup ${sizeClass} ${variantClass}`}>
      <EdisonMark size={markSize} variant={variant === 'dark' ? 'dark' : 'light'} />
      <span className="ed-text">
        <span className="ed-word">Edison Finance</span>
        {showTagline && <span className="ed-sub">Microfinance · NBFC</span>}
      </span>
    </span>
  );
}

window.EdisonMark = EdisonMark;
window.buildEdisonMark = buildEdisonMark;
window.EdisonLockup = EdisonLockup;
