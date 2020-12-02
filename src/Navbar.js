import React, { Component } from 'react';
import './Navbar.scss'

class Navbar extends Component {
  constructor() {
    super();
  }

  handleHomeButton = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <nav className='navbar'>
        <h1 className='site-title'>Rancid Tomatillos</h1>
        <button onClick={ this.handleHomeButton } className='button'>HOME</button>
      </nav>
    )
  }
}

export default Navbar;