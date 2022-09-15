import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './MovieSearchForm.styled';

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
    <Searchbar>
      <SearchForm onSubmit={onSubmitData}>
        <SearchFormInput
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          // onChange={e => setSearchParams({ query: e.target.value })}
          onChange={onInputChange}
          value={query}
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </Searchbar>
  );
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieSearchForm;
