import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
// import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovies(page, searchQuery).then(movies => {
      setMovies(movies.results);
    });
    setQuery(query);
  }, [page, query, searchQuery, setSearchParams]);

  // const updateQueryString = searchQuery => {
  //   const nextParams = searchQuery !== '' ? { searchQuery } : {};
  //   setSearchParams(nextParams);
  // };

  const onSubmitData = searchQuery => {
    // event.preventDefault();
    setPage(1);
    setSearchParams({ query: searchQuery.value });
    console.log(searchQuery.value);
    // const form = event.currentTarget;
    // setSearchParams({ searchQuery: form.element.searchQuery.value });
    // form.reset();
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
