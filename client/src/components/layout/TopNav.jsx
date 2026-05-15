import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EdisonLockup } from '../common/EdisonLogo.jsx';
import Icon from '../common/Icon.jsx';

const NAV_LINKS = [
  ['About', '/about'],
  ['Strategy', '/strategy'],
  ['Products', '/products'],
  ['Impact', '/impact'],
  ['Calculator', '/products#calculator'],
  ['Contact', '/contact'],
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-row">
        <Link to="/" className="brand-link" aria-label="Edison Finance home">
          <EdisonLockup size="sm" variant="light" />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map(([label, href]) => {
            const [base, fragment] = href.split('#');
            let isActive;
            if (fragment) {
              isActive = pathname === base && hash === `#${fragment}`;
            } else {
              isActive = pathname === base && !hash;
            }
            return (
              <Link key={href} to={href} className={isActive ? 'nav-active' : ''}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-cta">
          <Link to="/apply" className="btn btn-primary btn-sm">
            Apply for financing <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <button
          className={`nav-burger${open ? ' nav-burger-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <nav
        className={`nav-mobile${open ? ' nav-mobile-open' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="nav-mobile-inner">
          {NAV_LINKS.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link to="/apply" className="btn btn-primary" onClick={() => setOpen(false)}>
            Apply for financing
          </Link>
        </div>
      </nav>
    </header>
  );
}
