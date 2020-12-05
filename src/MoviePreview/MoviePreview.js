import React from 'react'
import './MoviePreview.scss'

const MoviePreview = (props) => {
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
    runtime 
  } = props.moviePreviewInfo;
    return (
      <section className="movie-preview-page " style={{backgroundImage: `url(${ backdrop_path })`}} >
        <div className="description-wrapper">
          <img className='movie-preview-img' src={poster_path} alt={title}/>
          <div className="movie-description">
            <h3 className="movie-preview-title">{title}</h3>
            <p className="movie-info-detail">{tagline}</p>
            <p className="movie-info-detail">Rating: {average_rating}</p>
            <p className="movie-info-detail">Release Date: {release_date}</p>
            <p className="movie-info-detail">Runtime: {runtime}</p>
            <p className="movie-info-detail">Budget: {budget}</p>
            <p className="movie-info-detail">Revenue: {revenue}</p>
            <p className="movie-info-detail">Genres: {genres}</p>
            <p className="movie-info-detail">Overview: {overview}</p>
          </div>
          <button data-testid='closing-button-element' onClick = { props.closeMoviePreviewBtn } className='movie-preview-button'></button>
        </div>
      </section>
    )
}

export default MoviePreview;