import React from 'react';
import './MovieCard.scss';

const MovieCard = (props) => {
  return (
    <section className='movie-card'>
      <img className='homepage-img' src={props.posterPath} alt={props.title}/>
      <h3 className='movie-card-title' >{props.title}</h3>
    </section>
  )
}

export default MovieCard;
