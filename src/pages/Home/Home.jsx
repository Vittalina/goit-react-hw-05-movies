import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import HomeMoviesList from 'components/HomeMovieList/HomeMovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies.results);
    });
    console.log(getTrendingMovies());
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <HomeMoviesList movies={movies} state={{ from: location }} />
    </main>
  );
};

export default Home;
