import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
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
    if (getAllMovieData()) {
      getAllMovieData()
        .then(data => this.setState({ homePageMovies: data.movies }))
        .catch(error => this.setState({ error }))
    } else {
      throw new Error("Wrong Bad");
    }
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
    .catch(error => this.setState({ error }))
  }

  render() {
  
    return (
      <main className='app'>
        <Navbar />
        {
          this.state.error && 
          <ErrorPage 
            errorMessage={ this.state.error }/>
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
