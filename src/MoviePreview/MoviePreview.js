import React, { Component } from 'react';
import './MoviePreview.scss';
import ReactPlayer from 'react-player/youtube';
import { getSingleMovieData, getMovieVideoData } from '../apiCalls';
import { Link } from 'react-router-dom';

class MoviePreview extends Component {
  constructor() {
    super();
    this.state = {
      movieObject: null,
      movieTrailer: '',
    };
  }
  componentDidMount = () => {
    let movieId;
    if (this.props.match) {
      movieId = parseInt(this.props.match.params.id);
    }
    getSingleMovieData(movieId)
      .then((data) =>
        this.setState({
          movieObject: data.movie,
        })
      )
      .catch((error) => this.setState({ error }));
    getMovieVideoData(movieId).then((data) =>
      this.setState({
        movieTrailer: this.findTrailerKey(data),
      })
    );
  };

  findTrailerKey = (data) => {
    let video = data.videos.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return !!video ? video.key : '';
  };

  switchNumToCurrency(number) {
    return '$' + number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  render() {
    if (!this.state.movieObject) {
      return (
        <h3 className="error-message app">
          We apologize, we couldn't find a match for this movie ID
        </h3>
      );
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
    } = this.state.movieObject;

    return (
      <section
        data-testid="movie-preview-page"
        className="movie-preview-page "
        style={{ backgroundImage: `url(${backdrop_path})` }}
      >
        <div className="preview-wrapper">
          <div className="description-wrapper">
            <img className="movie-preview-img" src={poster_path} alt={title} />
            <div className="movie-description">
              <h3 className="movie-preview-title">{title}</h3>
              <p className="movie-info-detail">{tagline}</p>
              <p className="movie-info-detail">
                Rating: {average_rating.toFixed(1)}
              </p>
              <p className="movie-info-detail">Release Date: {release_date}</p>
              <p className="movie-info-detail">Runtime: {runtime} minutes</p>
              <p className="movie-info-detail">
                Budget: {this.switchNumToCurrency(budget)}
              </p>
              <p className="movie-info-detail">
                Revenue: {this.switchNumToCurrency(revenue)}
              </p>
              <p className="movie-info-detail">Genre: {genres.join(', ')}</p>
              <p className="movie-info-detail">Overview: {overview}</p>
            </div>
            <Link to="/">
              <button
                data-testid="closing-button-element"
                className="movie-preview-button"
              ></button>
            </Link>
          </div>{' '}
          {this.state.movieTrailer && (
            <div>
              <h3>{`${title} Trailer:`}</h3>
              <ReactPlayer
                className="preview-react-player"
                url={`https:www.https://www.youtube.com/watch?v=${this.state.movieTrailer}`}
                controls={true}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default MoviePreview;
