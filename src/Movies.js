import React from 'react';
import MovieCard from './MovieCard';
import './Movies.css';

const Movies = (props) => {
  
  const movieCards = props.moviesInfo.map(movie => {
    return (
      <MovieCard 
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })
  
  return (
    <section className='movies-list'>
      {movieCards}
    </section>
  )
}

export default Movies;