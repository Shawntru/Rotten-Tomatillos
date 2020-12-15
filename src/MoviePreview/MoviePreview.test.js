import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import MoviePreview from './MoviePreview.js';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getSingleMovieData, getMovieVideoData } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('MoviePreview', () => {
  it('MoviePreview should render correctly', async () => {
    getSingleMovieData.mockResolvedValueOnce({
      movie: {
        id: 337401,
        title: 'Mulan',
        poster_path:
          'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
        release_date: '2020-09-04',
        overview:
          'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        budget: 200000000,
        revenue: 57000000,
        runtime: 115,
        tagline: 'Cool Movie',
        average_rating: 4.9,
      },
    });

    getMovieVideoData.mockResolvedValueOnce({
      videos: [
        {
          "id": 242,
          "movie_id": 337401,
          "key": "01ON04GCwKs",
          "site": "YouTube",
          "type": "Teaser"
        },
        {
          "id": 243,
          "movie_id": 337401,
          "key": "KK8FHdFluOQ",
          "site": "YouTube",
          "type": "Trailer"
        }
      ]
    });

    render(
      <MemoryRouter>
        <MoviePreview 
          movieId = { 337401 }
          getSingleMovieData = { getSingleMovieData }
          getMovieVideoData = { getMovieVideoData }
        />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Mulan')).toBeInTheDocument();
      expect(screen.getByText('Rating: 4.9')).toBeInTheDocument();
      expect(screen.getByText('Release Date: 2020-09-04')).toBeInTheDocument();
      expect(screen.getByText('Runtime: 115 minutes')).toBeInTheDocument();
      expect(screen.getByText('Budget: $200,000,000')).toBeInTheDocument();
      expect(screen.getByText('Revenue: $57,000,000')).toBeInTheDocument();
      expect(
        screen.getByText('Genre: Action, Adventure, Drama, Fantasy')
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Overview: When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.'
        )
      ).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByTestId('player-box')).toBeInTheDocument();
    });
  });
});
