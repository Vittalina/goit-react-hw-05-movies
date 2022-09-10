import { useState, useEffect } from 'react';
import { searchMovies } from 'services/API';
import MoviesList from 'components/MoviesList/MoviesList';
// import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    searchMovies(page, query).then(movies => {
      setMovies(prevState => [...prevState, ...movies.results]);
    });
    setQuery(query);
  }, [page, query]);

  const onSubmitData = event => {
    event.preventDefault();
    setPage(1);

    if (query.trim() === '') {
      alert('Please enter your request');
      return;
    }
  };

  const onInputChange = event => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
          value={query}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <MoviesList movies={movies} />
      {/* <Outlet /> */}
    </div>
  );
};

export default Movies;
