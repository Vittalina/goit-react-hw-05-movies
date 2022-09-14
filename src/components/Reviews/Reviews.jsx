import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/API';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(results => {
      setReviews(results);
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

Reviews.propType = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
