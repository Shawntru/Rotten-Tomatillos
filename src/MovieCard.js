import React from 'react';

const MovieCard = (props) => {
  return (
    <section className='movie-card'>
      <img src={props.posterPath} alt={props.title}/>
      <h3>{props.title}</h3>
    </section>
  )
}

export default MovieCard;
