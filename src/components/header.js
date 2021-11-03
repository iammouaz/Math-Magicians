import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="left">
      <h1 className="sitename">Math Magicians</h1>
    </nav>
    <nav className="right">
      <ul className="nabar">
        <li className="list-item"><Link style={{ textDecoration: 'none' }} to="/Home">Home</Link></li>
        <li className="list-item"><Link style={{ textDecoration: 'none' }} to="/Calculator">Calculator</Link></li>
        <li className="list-item"><Link style={{ textDecoration: 'none' }} to="/Quote">Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
