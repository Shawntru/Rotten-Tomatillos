import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import MovieCard from './MovieCard.js';
import '@testing-library/jest-dom';

describe('MovieCard', () => {
  it('MovieCard should render correctly', () => {
    render(<MovieCard 
      title={ 'Armagedon' }
      posterPath={ 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg' }
      id={ 694919 }
      key={ 694919 }
      movieEventClick={ jest.fn() }
     />
    )

    expect(screen.getByText('Armagedon')).toBeInTheDocument();
    expect(screen.getByAltText('Armagedon')).toBeInTheDocument();
  })

  it('should fire an closing button event', () => {
    const mockMovieClickEvent = jest.fn()
    render(<MovieCard 
      title={ 'Armagedon' }
      posterPath={ 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg' }
      id={ 694919 }
      key={ 694919 }
      movieEventClick={ mockMovieClickEvent }
     />
    )

    const movieCard = screen.getByTestId("moviecard-element");
    fireEvent.click(movieCard);

    expect(mockMovieClickEvent).toHaveBeenCalledWith( 694919 );

  })
})