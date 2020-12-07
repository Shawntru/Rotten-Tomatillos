import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import Movies from './Movies.js'

describe('Movies', () => {
  it('Movies should render correctly', () => {
    const moviesData = [{
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.666666666666667,
      "release_date": "2020-09-29"
      },
      {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 4.909090909090909,
      "release_date": "2020-09-04"
      },]

    render(
      <Movies 
        moviesInfo={ moviesData } 
        handleMovieClick={ jest.fn() } 
      />)

    expect(screen.getByText('Money Plane')).toBeInTheDocument();
    expect(screen.getByText('Mulan')).toBeInTheDocument();
  })
})