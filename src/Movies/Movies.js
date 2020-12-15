import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.scss';

const Movies = (props) => {
  let movieCards = [];

  function createCard(movie) {
    return (
      <MovieCard
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    );
  }

  if (!props.filteredMovies) {
    movieCards = props.moviesInfo.map((movie) => createCard(movie));
  } else {
    movieCards = props.filteredMovies.map((movie) => createCard(movie));
  }

  return (
    <section data-testid="movies-element">
      <h2 className="section-heading">Other Top Movies</h2>
      <div className="movies-list">{movieCards}</div>
    </section>
  );
};

export default Movies;
