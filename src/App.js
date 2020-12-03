import React, { Component } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';
import movieData from './movieData';
import MoviePreview from './MoviePreview';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: movieData,
      clickedMovie: ''
    }
  }
  handleMovieClick = (id) => {
      console.log(id + " Hello")
      this.setState({ clickedMovie: id})
  }

  render() {
  
    return (
      <main className='App'>
        <Navbar />
        { !this.state.clickedMovie && 
          <Movies moviesInfo={ this.state.homePageMovies.movies } handleMovieClick={ this.handleMovieClick }/>
        }
        { this.state.clickedMovie && 
          <MoviePreview movieId={ this.state.clickedMovie }/>
        }
      </main>
    )
  }
}

export default App;
