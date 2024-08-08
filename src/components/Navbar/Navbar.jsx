import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          toggleRef.current && !toggleRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="/favicon.svg" id="logo" alt="Logo" />
        </Link>
        <ul className="desktop-menu">
          <Link to="/" className="nav-link mx-lg-2">
            <li>About me</li>
          </Link>
          <Link to="/Work" className="nav-link mx-lg-2">
            <li>Projects</li>
          </Link>
          <Link to="/Contact" className="nav-link mx-lg-2">
            <li>Contact</li>
          </Link>
        </ul>
        <div 
          className="menu-toggle" 
          ref={toggleRef}
          onMouseEnter={handleMouseEnter}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {dropdownOpen && (
        <div 
          className="dropdown-content" 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/" onClick={() => setDropdownOpen(false)}>About me</Link>
          <Link to="/Work" onClick={() => setDropdownOpen(false)}>Projects</Link>
          <Link to="/Contact" onClick={() => setDropdownOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;