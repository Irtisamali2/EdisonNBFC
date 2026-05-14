import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

export default function Announcement() {
  return (
    <div className="announce">
      <div className="container announce-row">
        <span className="announce-dot" />
        <span><strong>Licensing in progress —</strong> SECP NBFC license expected by July 2026.</span>
        <Link to="/about#regulatory" className="announce-link">
          Regulatory journey <Icon name="arrow-right" size={12} />
        </Link>
      </div>
    </div>
  );
}
