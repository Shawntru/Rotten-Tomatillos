import TrailerPreview from './TrailerPreview';
import '@testing-library/jest-dom';
import { getMovieVideoData } from '../apiCalls.js';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
jest.mock('../apiCalls.js');

describe('MovieTrailer', () => {
  let movieProps = {};

  beforeEach(() => {
    getMovieVideoData.mockResolvedValueOnce({
      videos: [
        {
          id: 243,
          movie_id: 337401,
          key: 'KK8FHdFluOQ',
          site: 'YouTube',
          type: 'Trailer',
        },
        {
          id: 246,
          movie_id: 337401,
          key: '1UXZEGYSwgg',
          site: 'YouTube',
          type: 'Featurette',
        },
      ],
    });

    movieProps = {
      id: 337401,
      title: 'Mulan',
      release_date: '2020-09-04',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
      runtime: 115,
    };
  });

  it('should display after the movie data is fetched', async () => {
    render(
      <MemoryRouter>
        <TrailerPreview trailerInfo={movieProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('player-wrapper')).toBeInTheDocument();
    });
  });
});
