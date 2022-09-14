import { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitData = event => {
    event.preventDefault();
    onSubmit(query);

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
    <div className="Searchbar">
      <form onSubmit={onSubmitData} className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          // onChange={e => setSearchParams({ query: e.target.value })}
          onChange={onInputChange}
          value={query}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  );
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieSearchForm;
