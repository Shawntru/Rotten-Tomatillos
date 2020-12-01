import React, { Component } from 'react';
import './Navbar.css'

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
        <button onClick={ this.handleHomeButton }>HOME</button>
      </nav>
    )
  }
}

export default Navbar;