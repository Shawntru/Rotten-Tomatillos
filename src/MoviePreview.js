import React from 'react'
import './MoviePreview.scss'

const MoviePreview = (props) => {
    console.log(props)
    return (
      <section className="movie-preview-page " style={{backgroundImage: `url(${props.moviePreviewInfo.backdrop_path})`}} >
        {/* <img className='movie-preview-img' src={props.posterPath} alt={props.title}/> */}
      </section>
    )
}

export default MoviePreview;