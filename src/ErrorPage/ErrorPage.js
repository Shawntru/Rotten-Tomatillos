import React from 'react';
import './ErrorPage.scss';

const ErrorPage = ({ errorMessage }) => {
  return (
    <section className="error-page app">
      <h1>Oops! {errorMessage}</h1>
      <h3>Something went wrong. Our servers need some time to ketchup!</h3>
    </section>
  )
}

export default ErrorPage;