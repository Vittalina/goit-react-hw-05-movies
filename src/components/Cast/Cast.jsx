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
            {cast.map(cast => {
              return (
                <li key={cast.id}>
                  <img src={cast.profile_path} alt={cast.name} />
                  <p>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
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
