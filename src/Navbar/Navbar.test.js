import React from 'react'
import { screen, render } from '@testing-library/react'
import Navbar from './Navbar.js'

describe('Navbar', () => {
  it('should render correctly', () => {
    render(
    <Navbar handleChangeFunction={ jest.fn() } />)

    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
    expect(screen.getByTestId('search-label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search a title...')).toBeInTheDocument();
  })
})