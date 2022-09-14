import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
