import React, { Component } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';
// import movieData from './movieData';
import MoviePreview from './MoviePreview';
import { getAllMovieData, getSingleMovieData } from './apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: [],
      clickedMovie: '',
      movieObject: {},
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovieData()
      .then(data => this.setState({ homePageMovies: data.movies }))
      .catch(error => this.setState({ error }))
  }

  handleHomeButton = (event) => {
    event.preventDefault();
    this.setState({
      clickedMovie: '',
      movieObject: {}
    })
  }

  handleMovieClick = (id) => {
    this.setState({ clickedMovie: id })
    getSingleMovieData(id)
    .then(data => this.setState({ movieObject: data.movie }))
  }

  render() {
  
    return (
      <main className='app'>
        <Navbar />
        {
          this.state.error && 
          <h2>{this.state.error} </h2> 
        }
        {
          !this.state.homePageMovies.length &&
          <h2> ...Loading Movies...</h2>
        }
        { 
          !this.state.clickedMovie && 
          <Movies 
            moviesInfo={ this.state.homePageMovies } 
            handleMovieClick={ this.handleMovieClick }/>
        }
        { 
          this.state.clickedMovie && 
           <MoviePreview 
             moviePreviewInfo={ this.state.movieObject } 
             closeMoviePreviewBtn = { this.handleHomeButton }/>
        }
      </main>
    )
  }
}

export default App;
