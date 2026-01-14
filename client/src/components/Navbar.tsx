import './Navbar.css'
import { Link } from 'react-router-dom';
import snordLogo from '../assets/pixel-orange.png'

export default function Navbar() {
      return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img 
            className="logo" 
            src={snordLogo} 
            alt="Snord.ai"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column flex-lg-row me-lg-auto align-items-start align-items-lg-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/chat" className="nav-link">Chat</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
