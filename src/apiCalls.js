export const getAllMovieData = async () => {
  const response = await fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  );
  return await response.json();
};

export const getSingleMovieData = async (id) => {
  const response = await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  );
  console.log(response.statusText);
  return await response.json();
};
