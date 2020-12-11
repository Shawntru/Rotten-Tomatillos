import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
import {
  getAllMovieData,
  getSingleMovieData,
  getMovieVideoData,
} from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import TrailerPreview from './TrailerPreview/TrailerPreview';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: [],
      trailerMovie: {},
      error: '',
    };
  }

  componentDidMount = () => {
    getAllMovieData()
      .then((data) => this.updateMovieDisplays(data.movies))
      .catch((error) => this.setState({ error }));
  };

  // ADDED to get data
  // getVideoData = () => {
  //   this.state.homePageMovies.forEach((movie) => {
  //     getMovieVideoData(movie.id).then((data) => console.log(data.videos));
  //   });
  // };

  handleError() {
    return (
      <Route render={() => <ErrorPage errorMessage={this.state.error} />} />
    );
  }

  updateMovieDisplays = (data) => {
    this.setState({ homePageMovies: data });
    const trailerMovieIndex = Math.floor(Math.random() * data.length);
    this.updateTrailerMovie(trailerMovieIndex);

    //ADDING for data
    // this.getVideoData();
  };

  updateTrailerMovie(trailerMovieIndex) {
    getSingleMovieData(
      this.state.homePageMovies[trailerMovieIndex].id
    ).then((data) => this.setState({ trailerMovie: data.movie }));
  }

  render() {
    if (this.state.homePageMovies === undefined) {
      return (
        <main className="app">
          <ErrorPage errorMessage={this.state.error} />
        </main>
      );
    }
    return (
      <main className="app">
        <Navbar />
        {this.state.error && <ErrorPage errorMessage={this.state.error} />}
        {!this.state.homePageMovies.length && (
          <h2 className="error-page"> ...Loading Movies...</h2>
        )}
        <Switch>
          <Route exact path="/movie/:id" component={MoviePreview} />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <section>
                  <TrailerPreview trailerInfo={this.state.trailerMovie} />
                  <Movies moviesInfo={this.state.homePageMovies} />
                </section>
              );
            }}
          />
          <Route render={() => <ErrorPage errorMessage={this.state.error} />} />
        </Switch>
      </main>
    );
  }
}

export default App;
