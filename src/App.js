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
      clickedMovie: '',
      movieObject: {}
    }
  }
  handleMovieClick = (id) => {
      console.log(id + " Hello")
      this.setState({ 
        clickedMovie: id,
        movieObject: this.state.homePageMovies.movies.find(movie => movie.id === id)
      })
  }

  render() {
  
    return (
      <main className='app'>
        <Navbar />
        { !this.state.clickedMovie && 
          <Movies moviesInfo={ this.state.homePageMovies.movies } handleMovieClick={ this.handleMovieClick }/>
        }
        { this.state.clickedMovie && 
          <MoviePreview moviePreviewInfo={ this.state.movieObject }/>
        }
      </main>
    )
  }
}

export default App;
