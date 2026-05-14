import { EdisonMark } from '../common/EdisonLogo.jsx';

export default function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="page-header">
      <div className="page-header-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
      </div>
      <div className="container page-header-inner">
        <div className="page-header-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-md page-header-title">{title}</h1>
          {lede && <p className="body-lg page-header-lede">{lede}</p>}
        </div>
        <div className="page-header-mark">
          <EdisonMark size={160} variant="light" />
        </div>
      </div>
    </section>
  );
}
