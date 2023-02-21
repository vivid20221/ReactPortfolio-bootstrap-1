import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
