import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
import { getAllMovieData, getSingleMovieData } from './apiCalls';
import { Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: [],
      clickedMovie: '',
      movieObject: {},
      error: '',
    };
  }

  componentDidMount = () => {
    getAllMovieData()
      .then((data) => this.setState({ homePageMovies: data.movies }))
      .catch((error) => this.setState({ error }));
  };

  handleHomeButton = (event) => {
    event.preventDefault();
    this.setState({
      clickedMovie: '',
      movieObject: {},
    });
  };

  handleMovieClick = (id) => {
    getSingleMovieData(id)
      .then((data) =>
        this.setState({
          movieObject: data.movie,
          clickedMovie: id,
        })
      )
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <main className="app">
        <Navbar />
        {!this.state.homePageMovies.length && (
          <h2 className="error-page"> ...Loading Movies...</h2>
        )}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Movies
                moviesInfo={this.state.homePageMovies}
                handleMovieClick={this.handleMovieClick}
              />
            );
          }}
        />
        {/* {!this.state.clickedMovie && (
          <Movies
            moviesInfo={this.state.homePageMovies}
            handleMovieClick={this.handleMovieClick}
          />
        )} */}
        {/* {this.state.clickedMovie && (
          <MoviePreview
            moviePreviewInfo={this.state.movieObject}
            closeMoviePreviewBtn={this.handleHomeButton}
          />
        )} */}
        {/* {this.state.error && <ErrorPage errorMessage={this.state.error} />} */}
      </main>
    );
  }
}

export default App;
