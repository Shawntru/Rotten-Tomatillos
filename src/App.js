import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
import { getAllMovieData, getMovieVideoData, getSingleMovieData } from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import TrailerPreview from './TrailerPreview/TrailerPreview';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageMovies: [],
      moviesToDisplay: null,
      trailerMovie: {},
      error: '',
    };
  }

  componentDidMount = () => {
    getAllMovieData()
      .then((data) => this.updateMovieDisplays(data.movies))
      .catch((error) => this.setState({ error }));
  };

  handleChange = (event) => {
    event.preventDefault()
    this.setState({search: event.target.value});
      let currentMovieList = [];
      let newMovieList = [];
  
      if(event.target.value !== "") {
        currentMovieList = this.state.homePageMovies;
        newMovieList = currentMovieList.filter(movie => {
          const movieTitle = movie.title.toLowerCase();
          const userTitle = event.target.value.toLowerCase();
  
          return movieTitle.includes(userTitle);
        })
      } else {
        newMovieList = this.state.homePageMovies;
      }
      this.setState({
        moviesToDisplay: newMovieList
      })
  }

  handleError() {
    return (
      <Route render={() => <ErrorPage errorMessage={this.state.error} />} />
    );
  }

  updateMovieDisplays = (data) => {
    this.setState({ homePageMovies: data });
    const trailerMovieIndex = Math.floor(Math.random() * data.length);
    this.updateTrailerMovie(trailerMovieIndex);
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
        <Navbar handleChangeFunction={this.handleChange} />
        {this.state.error && <ErrorPage errorMessage={this.state.error} />}
        {!this.state.homePageMovies.length && (
          <h2 className="error-page"> ...Loading Movies...</h2>
        )}
        <Switch>
          <Route exact path="/movie/:id" render = {({ match }) => <MoviePreview 
            movieId = {match.params.id}
            getSingleMovieData= { getSingleMovieData }
            getMovieVideoData={ getMovieVideoData }/>} />
          <Route exact path="/" render={() => {
              return (
                <section>
                  <TrailerPreview trailerInfo={this.state.trailerMovie} />
                  <Movies 
                  moviesInfo={ this.state.homePageMovies } 
                  filteredMovies={ this.state.moviesToDisplay }/>
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
