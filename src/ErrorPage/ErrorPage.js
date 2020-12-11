import React from 'react';
import './ErrorPage.scss';
import tomato from '../assets/tomato.png'

const ErrorPage = ({ errorMessage }) => {
  return (
    <section data-testid='error-page-element' className="error-page app">
      <img className='error-tomato' src={tomato} alt='tomato'/>
      <h1 className='error-header'>Oops! {errorMessage}</h1>
      <h3 className='error-text'>Something went wrong. Our servers need some time to ketchup!</h3>
    </section>
  )
}

export default ErrorPage;