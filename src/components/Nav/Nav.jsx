// Navbar.js
import React from 'react';
import './Nav.css'; 


const Navbar = () => {
 
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li>
          <a className='logo'  href="#home">Vinyl Shop</a>
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
      </ul>
    </nav>
  );
};

export default Navbar;
