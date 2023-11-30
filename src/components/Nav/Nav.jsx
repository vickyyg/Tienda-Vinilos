// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className='logo'>Vinyl Shop</NavLink>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Vinyl</a>
        </li>
        <li>
          <a href="#services">Records</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <NavLink to="/cart" style={{ fontSize: "30px" }}>🛒</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
