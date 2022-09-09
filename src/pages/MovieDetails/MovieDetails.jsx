import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/API';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setMovie(movie);
      setLoading(true);
    });
  }, [movieId]);

  return (
    <main>
      {loading && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.popularity}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genre_ids}</p>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
