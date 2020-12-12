import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.scss';

const Movies = (props) => {
  const movieCards = props.moviesInfo.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    );
  });

  return (
    <section data-testid="movies-element">
      <h2 className="section-heading">Other Top Movies</h2>
      <div className="movies-list">{movieCards}</div>
    </section>
  );
};

export default Movies;
