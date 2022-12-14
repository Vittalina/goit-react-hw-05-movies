import axios from 'axios';

const MY_API_KEY = '4a75e2e412d1d0b089e3b2f8fd934085';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${MY_API_KEY}&page=1`
  );
  return response.data;
};

export const searchMovies = async (page, searchQuery) => {
  const response = await axios.get(
    `/search/movie?api_key=${MY_API_KEY}&query=${searchQuery}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${MY_API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${MY_API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${MY_API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
