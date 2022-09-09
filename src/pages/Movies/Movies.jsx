// import { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

// import PropTypes from 'prop-types';
// import 'styles/styles.css';

const Movies = () => {
  const [query, setQuery] = useState('');

  const onSubmitData = event => {
    event.preventDefault();
    //  onSubmit(query);

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
      <ul>
        {/* <li>
          <Link to="movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="movies/:movieId/reviews">Reviews</Link>
        </li> */}
      </ul>
      {/* <Outlet /> */}
    </div>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Movies;
