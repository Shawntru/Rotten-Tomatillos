import React from 'react'
import './MoviePreview.scss'

const MoviePreview = (props) => {
    console.log(props)
    return (
      <section className="movie-preview-page " style={{backgroundImage: `url(${ props.moviePreviewInfo.backdrop_path })`}} >
        <div className="description-wrapper">
          <img className='movie-preview-img' src={ props.moviePreviewInfo.poster_path } alt={props.title}/>
          <div className="movie-description">
            <h3 className="movie-preview-title">Mulan</h3>
            <p className="movie-info-detail">Tagline: Kill. Or be killed.</p>
            <p className="movie-info-detail">Rating: 5.1</p>
            <p className="movie-info-detail">Realease Date: 2020-07-02</p>
            <p className="movie-info-detail">Budget: 400$</p>
            <p className="movie-info-detail">Revenue: 10000$</p>
            <p className="movie-info-detail">Genres: Action, Crime, Drama, Thriller</p>
            <p className="movie-info-detail">Overview: A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong</p>
          </div>
          <button onClick = { props.closeMoviePreviewBtn } className='movie-preview-button'></button>
        </div>
      </section>
    )
}

export default MoviePreview;