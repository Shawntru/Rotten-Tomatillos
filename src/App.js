import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Navbar />
      </main>
    )
  }
}

export default App;
