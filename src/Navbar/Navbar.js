import React from 'react';
import './Navbar.scss';

const Navbar = (props) => {
  return (
    <nav data-testid="navbar-element" className="navbar">
      <h1 className="site-title">Rancid Tomatillos</h1>
      <form className="search-wrapper">
        <label className="label-title" htmlFor="search"></label>
        <input className="input-box"
          name="search"
          placeholder="search a title..."
          onChange={props.handleChangeFunction}
          autoComplete="off" />
      </form>
    </nav>
  );
};

export default Navbar;
