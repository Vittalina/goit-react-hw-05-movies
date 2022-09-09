import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import HomeMoviesList from 'components/HomeMovieList/HomeMovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState('1');

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(prevState => [...prevState, ...movies.results]);
    });
    console.log(getTrendingMovies());
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <HomeMoviesList movies={movies} />
    </main>
  );
};

export default Home;
