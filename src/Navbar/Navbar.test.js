import React from 'react'
import { screen, render } from '@testing-library/react'
import Navbar from './Navbar.js'

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />)

    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
  })
})