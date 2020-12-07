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
  console.log(budget)

//TO DO tests for functions
function switchNumToCurrency(number) {
  return '$' + number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

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
            <p className="movie-info-detail">Budget: {switchNumToCurrency(budget)}</p>
            <p className="movie-info-detail">Revenue: {switchNumToCurrency(revenue)}</p>
            <p className="movie-info-detail">Genre: {genres.join(', ')}</p>
            <p className="movie-info-detail">Overview: {overview}</p>
          </div>
          <button data-testid='closing-button-element' onClick = { props.closeMoviePreviewBtn } className='movie-preview-button'></button>
        </div>
      </section>
    )
}

export default MoviePreview;