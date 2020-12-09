import React, { Component } from 'react';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import ErrorPage from './ErrorPage/ErrorPage';
import MoviePreview from './MoviePreview/MoviePreview';
import { getAllMovieData } from './apiCalls';
import { Route, Switch } from 'react-router-dom'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homePageMovies: [],
      error: ''
    }
  }

  componentDidMount = () => {
      getAllMovieData()
        .then(data => this.setState({ homePageMovies: data.movies }))
        .catch(error => this.setState({ error}))
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
            <h2 className="error-page"> ...Loading Movies...</h2>
          }
          <Route exact path="/movie/:id" component={ MoviePreview } />
          <Route exact path="/" render={() => <Movies moviesInfo={ this.state.homePageMovies } />} />
        </main>
      ) 
    }
  }

export default App;
