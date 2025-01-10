import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/dmi_logo_header.png';
import '/src/styles/Header.css';

function MainHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="header">
      <img src={logo} alt="dmi Toronto" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/live">Live</Link>
        <Link to="/history">About Us</Link>
        <Link to="/contact">Contact</Link>
        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            More
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/event">Archive</Link>
              <Link to="/Life">Life Together</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
