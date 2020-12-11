import ErrorPage from "./ErrorPage/ErrorPage";

export const getAllMovieData = async () => {
  const response = await fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  );
  if(parseInt(response.status) > 499) {
    return <ErrorPage/>
  }
  return await response.json();
};

export const getSingleMovieData = async (id) => {
  const response = await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  );

  return await response.json();
};
