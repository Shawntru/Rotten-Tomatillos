import React from 'react';
import { screen, render } from '@testing-library/react';
import ErrorPage from './ErrorPage.js';

describe('ErrorPage', () => {
  it('ErrorPage should render correctly', () => {
    const errorMessage = 'This is an error'
    render(
      <ErrorPage
      errorMessage={ errorMessage }
      />)
      
    expect(screen.getByText('Oops! This is an error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Our servers need some time to ketchup!')).toBeInTheDocument();
  })
})