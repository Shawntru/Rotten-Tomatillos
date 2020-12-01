import React, { Component } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';
import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = movieData;
  }

  render() {
    return (
      <main>
        <Navbar />
        <Movies moviesInfo={ this.state.movies } />
      </main>
    )
  }
}

export default App;
