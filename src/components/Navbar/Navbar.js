// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to = "/"><img src="./service-on.png" alt="Company Logo" className="logo" /></Link>
      </div>

      {/* Navigation Buttons */}
      <div className="navbar-buttons">
      <Link to="/add-service" className="nav-button">Add Service</Link>
      <Link to="/services" className="nav-button">Services</Link>
      </div>
    </div>
  );
};

export default Navbar;
