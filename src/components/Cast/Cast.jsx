import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/API';
import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(cast => {
      setCast(cast);
      setLoading(true);
    });
  }, [movieId]);

  return (
    <>
      {loading && (
        <>
          <p>Cast</p>
          <ul>
            {cast.map(({ id, name, profile_path, character }) => {
              const imageURL = `https://image.tmdb.org/t/p/w500${profile_path}`;
              return (
                <li key={id}>
                  <img src={imageURL} alt={name} />
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

Cast.propType = {
  cast: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
