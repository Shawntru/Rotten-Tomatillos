import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
import { getAllMovieData, getSingleMovieData } from './apiCalls';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: [],
      error: '',
      // clickedMovie: '',
      movieObject: {},
    };
  }

  componentDidMount = () => {
    getAllMovieData()
      .then((data) => this.setState({ homePageMovies: data.movies }))
      .catch((error) => this.setState({ error }));
  };

  // FUNCTION REMOVED, now handled by <Link> in MoviePreview
  //
  handleHomeButton = (event) => {
    event.preventDefault();
    this.setState({
      movieObject: {},
    });
  };

  handleMovieClick = (id) => {
    getSingleMovieData(id)
      .then((data) =>
        this.setState({
          movieObject: data.movie,
        })
      )
      .then(() => this.props.history.push(`/movie/${id}`))
      .catch((error) => this.setState({ error }));
  };

  handleRefresh = (id) => {
    getSingleMovieData(id)
      .then((data) =>
        this.setState({
          movieObject: data.movie,
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
        <Route
          exact
          path="/movie/:id"
          render={(props) => {
            return (
              <MoviePreview
                {...props}
                moviePreviewInfo={this.state.movieObject}
                closeMoviePreviewBtn={this.handleHomeButton}
                movieRefreshFunction={this.handleRefresh}
              />
            );
          }}

          // render={({ match }) => {
          //   const { id } = match.params;
          //   const movieToRender = this.state.homePageMovies.find(
          //     (movie) => movie.id === parseInt(id, 10)
          //   );
          //   if (!movieToRender) return <h2>No Movie Found</h2>;
          //   return <MoviePreview {...movieToRender} />;
          // }}
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

export default withRouter(App);
