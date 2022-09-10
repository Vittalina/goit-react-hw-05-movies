import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const HomeMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

HomeMoviesList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default HomeMoviesList;
