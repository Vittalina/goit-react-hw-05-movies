import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/API';
import PropTypes from 'prop-types';
import {
  CastImage,
  CastUl,
  CastHeader,
  CastTitle,
  CastInfo,
} from 'components/Cast/Cast.styled';

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
          <CastHeader>Cast</CastHeader>
          <CastUl>
            {cast.map(({ id, name, profile_path, character }) => {
              const imageURL = `https://image.tmdb.org/t/p/w500${profile_path}`;
              return (
                <li key={id}>
                  <CastImage src={imageURL} alt={name} />
                  <CastTitle>
                    Name: <CastInfo>{name}</CastInfo>
                  </CastTitle>
                  <CastTitle>
                    Character: <CastInfo>{character}</CastInfo>
                  </CastTitle>
                </li>
              );
            })}
          </CastUl>
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
