import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import MoviePreview from './MoviePreview.js';
import '@testing-library/jest-dom';


describe('MoviePreview', () => {
  it('MoviePreview should render correctly', () => {
    const oneMovie = {
        "id": 337401,
        "title": "Mulan",
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "release_date": "2020-09-04",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "genres": [
        "Action",
        "Adventure",
        "Drama",
        "Fantasy"
        ],
        "budget": 200000000,
        "revenue": 57000000,
        "runtime": 115,
        "tagline": "Cool Movie",
        "average_rating": 4.9
      }
    render(<MoviePreview 
      moviePreviewInfo={ oneMovie } 
      closeMoviePreviewBtn = { jest.fn() }
     />
    )
    expect(screen.getByAltText('Mulan')).toBeInTheDocument();
    expect(screen.getByText('Mulan')).toBeInTheDocument();
    expect(screen.getByText('Cool Movie')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.9')).toBeInTheDocument();
    expect(screen.getByText('Release Date: 2020-09-04')).toBeInTheDocument();
    expect(screen.getByText('Runtime: 115')).toBeInTheDocument();
    expect(screen.getByText('Budget: 200000000')).toBeInTheDocument();
    expect(screen.getByText('Revenue: 57000000')).toBeInTheDocument();
    expect(screen.getByText('Genres: ActionAdventureDramaFantasy')).toBeInTheDocument();
    expect(screen.getByText('Overview: When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('should fire an closing button event', () => {
    const mockMovieCloseButton = jest.fn()
    render(<MoviePreview 
      moviePreviewInfo={{}} 
      closeMoviePreviewBtn = { mockMovieCloseButton }
     />
    )

    const moviePreviewBtn = screen.getByTestId('closing-button-element');
    fireEvent.click(moviePreviewBtn);

    expect(mockMovieCloseButton).toHaveBeenCalled();
  })
})