import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div data-testid="NavMenu">
    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand header" to="/">Math Magicians</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-light">
            <Link to="/Home" className="nav-link list-item">Home</Link>
            <Link to="/Calculator" className="nav-link list-item">Calculator</Link>
            <Link to="/Quote" className="nav-link list-item">Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
