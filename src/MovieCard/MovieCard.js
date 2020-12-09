import React from 'react';
import './MovieCard.scss';
import {Link} from 'react-router-dom'

const MovieCard = (props) => {

  return (
    <Link to={`/movie/${props.id}`}>
      <section data-testid={`moviecard-element-${props.id}`} className='movie-card'>
      <img className='homepage-img' src={props.posterPath} alt={props.title}/>
      <h3 className='movie-card-title' >{props.title}</h3>
    </section>
    </Link>
  )
}

export default MovieCard;
