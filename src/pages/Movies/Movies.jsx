import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
// import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovies(page, searchQuery).then(movies => {
      setMovies(movies.results);
    });
    // setQuery(query);
  }, [page, searchQuery]);

  const onSubmitData = search => {
    setPage(1);
    setSearchParams({ query: search });
    // console.log(searchQuery);
  };

  return (
    <div>
      <MovieSearchForm onSubmit={onSubmitData} />
      <MoviesList movies={movies} />
      {/* <Outlet /> */}
    </div>
  );
};

export default Movies;
