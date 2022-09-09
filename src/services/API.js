import axios from 'axios';

const MY_API_KEY = '4a75e2e412d1d0b089e3b2f8fd934085';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${MY_API_KEY}&page=1`
  );
  return response.data;
};
