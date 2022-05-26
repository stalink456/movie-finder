export const searchMovies = async (movieName) => {
  const request = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${movieName}&apge=1&limit=6`
  );
  const response = await request.json();
  return response.data;
};

export const getMovieById = async (movieId) => {
  const request = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
  );
  const response = await request.json();
  return response.data.movie;
};
