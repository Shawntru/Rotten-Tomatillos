import TrailerPreview from './TrailerPreview';
import '@testing-library/jest-dom';
import { getMovieVideoData } from '../apiCalls.js';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
jest.mock('../apiCalls.js');

describe('MovieTrailer', () => {
  const movieProps = {
    id: 337401,
    title: 'Mulan',
    release_date: '2020-09-04',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    runtime: 115,
  };

  it('should display after the movie data is fetched', async () => {
    getMovieVideoData.mockResolvedValueOnce({
      videos: [
        {
          id: 246,
          movie_id: 337401,
          key: '1UXZEGYSwgg',
          site: 'YouTube',
          type: 'Featurette',
        },
        {
          id: 243,
          movie_id: 337401,
          key: 'KK8FHdFluOQ',
          site: 'YouTube',
          type: 'Trailer',
        },
      ],
    });

    render(
      <MemoryRouter>
        <TrailerPreview trailerInfo={movieProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('player-wrapper')).toBeInTheDocument();
    });
  });

  it(`should find a movie trailer from returned data,
      and display its info and video`, async () => {
    getMovieVideoData.mockResolvedValueOnce({
      videos: [
        {
          id: 246,
          movie_id: 337401,
          key: '1UXZEGYSwgg',
          site: 'YouTube',
          type: 'Featurette',
        },
        {
          id: 243,
          movie_id: 337401,
          key: 'KK8FHdFluOQ',
          site: 'YouTube',
          type: 'Trailer',
        },
      ],
    });

    render(
      <MemoryRouter>
        <TrailerPreview trailerInfo={movieProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      const playerTitle = screen.getByTestId('KK8FHdFluOQ');
      const titleDisplay = screen.getByTestId('trailer-movie-title');
      expect(playerTitle).toBeInTheDocument();
      expect(titleDisplay).toBeInTheDocument();
    });
  });

  it(`should return a placeholder trailer 
      if no trailer is found from api call`, async () => {
    getMovieVideoData.mockResolvedValueOnce({
      videos: [
        {
          id: 246,
          movie_id: 337401,
          key: '1UXZEGYSwgg',
          site: 'YouTube',
          type: 'Featurette',
        },
        {
          id: 243,
          movie_id: 337401,
          key: 'KK8FHdFluOQ',
          site: 'Fake Site',
          type: 'Trailer',
        },
      ],
    });

    render(
      <MemoryRouter>
        <TrailerPreview trailerInfo={movieProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      const playerTitle = screen.getByTestId('2Gg6Seob5Mg');
      const titleDisplay = screen.getByTestId('trailer-movie-title');
      expect(playerTitle).toBeInTheDocument();
      expect(titleDisplay).toBeInTheDocument();
    });
  });
});
