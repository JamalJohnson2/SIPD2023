import React, { useState, useEffect } from 'react';
import '../Navigation/Nav.css';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="Home">
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>About us</Link>
        </li>
        <li>
          <Link to="Events" smooth={true} duration={500}>Events</Link>
        </li>
        <li>
          <Link to="Officers" smooth={true} duration={500}>Officers</Link>
        </li>
        <li>
          <Link to="Gallery" smooth={true} duration={500}>Gallery</Link>
        </li>
        <li>
          <Link to="Gallery" smooth={true} duration={500}>Achievements</Link>
        </li>
        <li>
          <Link to="Gallery" smooth={true} duration={500}>Initiatives</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};
  
  export default Navigation;