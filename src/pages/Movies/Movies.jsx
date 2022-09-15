import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/API';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovies(page, searchQuery).then(movies => {
      setMovies(movies.results);
    });
  }, [page, searchQuery]);

  const onSubmitData = search => {
    setPage(1);
    setSearchParams({ query: search });
  };

  return (
    <div>
      <MovieSearchForm onSubmit={onSubmitData} />
      <MoviesList movies={movies} to="/movies" state={{ from: location }} />
    </div>
  );
};

export default Movies;
