import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav data-testid="navbar-element" className="navbar">
      <h1 className="site-title">Rancid Tomatillos</h1>
    </nav>
  );
};

export default Navbar;
