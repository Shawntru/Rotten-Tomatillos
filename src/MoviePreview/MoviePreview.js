import React, {Component} from 'react'
import './MoviePreview.scss'
import {getSingleMovieData} from '../apiCalls'
import { Link } from 'react-router-dom'

class MoviePreview extends Component {
  constructor() {
    super();
    this.state = {
      movieObject: null,
    }
  }
  componentDidMount = () => {
    const movieId = parseInt(this.props.match.params.id)
    getSingleMovieData(movieId)
      .then(data => this.setState({ 
        movieObject: data.movie}))
      .catch(error => this.setState({ error }))
  }

  switchNumToCurrency(number) {
    return '$' + number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }

  render() {
    if(!this.state.movieObject) {
      return <section>Error</section>
    }
    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        overview,
        genres,
        budget,
        revenue,
        tagline,
        average_rating,
        runtime,
    } = this.state.movieObject

    return (
      <section data-testid='movie-preview-page' className="movie-preview-page " style={{backgroundImage: `url(${ backdrop_path })`}} >
        <div className="description-wrapper">
          <img className='movie-preview-img' src={poster_path} alt={title}/>
          <div className="movie-description">
            <h3 className="movie-preview-title">{title}</h3>
            <p className="movie-info-detail">{tagline}</p>
            <p className="movie-info-detail">Rating: {average_rating.toFixed(1)}</p>
            <p className="movie-info-detail">Release Date: {release_date}</p>
            <p className="movie-info-detail">Runtime: {runtime} minutes</p>
            <p className="movie-info-detail">Budget: {this.switchNumToCurrency(budget)}</p>
            <p className="movie-info-detail">Revenue: {this.switchNumToCurrency(revenue)}</p>
            <p className="movie-info-detail">Genre: {genres.join(', ')}</p>
            <p className="movie-info-detail">Overview: {overview}</p>
          </div>
          <Link to="/">
            <button data-testid='closing-button-element' className='movie-preview-button'></button>
          </Link> 
        </div>
      </section>
    )
  } 
}

export default MoviePreview;