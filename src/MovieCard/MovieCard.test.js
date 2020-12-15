import React from 'react';
import { screen, render } from '@testing-library/react';
import MovieCard from './MovieCard.js';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('MovieCard', () => {
  it('MovieCard should render correctly', () => {
    render(
      <MemoryRouter>
        <MovieCard
          title={'Armagedon'}
          posterPath={
            'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg'
          }
          id={694919}
          key={694919}
          movieEventClick={jest.fn()}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Armagedon')).toBeInTheDocument();
    expect(screen.getByAltText('Armagedon')).toBeInTheDocument();
  });
});
