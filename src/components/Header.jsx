import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from '/src/assets/dmi_logo_header.png'
import '/src/styles/Header.css';

function MainHeader(){
    return (
      <header className="header">
        <img src={logo} alt="dmi Toronto" className="logo" />
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/live">Live</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event</Link>
        </nav>
      </header>

    );

};

export default MainHeader;