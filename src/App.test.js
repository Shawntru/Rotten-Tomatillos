import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getAllMovieData } from './apiCalls.js';
import { getSingleMovieData } from './apiCalls.js';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
jest.mock('./apiCalls.js');

describe('App', () => {
  beforeEach(() => {
    getAllMovieData.mockResolvedValueOnce({
      movies: [
        {
          id: 694919,
          poster_path:
            'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          backdrop_path:
            'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          title: 'Money Plane',
          average_rating: 6.666666666666667,
          release_date: '2020-09-29',
        },
        {
          id: 337401,
          poster_path:
            'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
          backdrop_path:
            'https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
          title: 'Mulan',
          average_rating: 4.909090909090909,
          release_date: '2020-09-04',
        },
      ],
    });
  });

  it('should render a navbar, show loading movies text', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navbarElement = screen.getByTestId('navbar-element');
    expect(navbarElement).toBeInTheDocument();

    const loadingMessage = screen.getByText('...Loading Movies...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('should render all movies', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const moviesElement = screen.getByTestId('movies-element');
    expect(moviesElement).toBeInTheDocument();

    const newMovie = await waitFor(() => {
      screen.getByText('Money Plane');
      screen.getByText('Mulan');
    });
  });

  it('should allow users to click on a movie and take them to a Movie Preview', async () => {
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
        tagline: '',
        average_rating: 4.909090909090909,
      },
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const movieCard = await waitFor(() =>
      screen.getByTestId('moviecard-element-337401')
    );
    fireEvent.click(movieCard);

    await waitFor(() => {
      expect(screen.getByTestId('movie-preview-page')).toBeInTheDocument();
    });
  });
});
