import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/API';
import { Link } from 'react-router-dom';

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
  const { title, poster_path, popularity, overview, genres } = movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <main>
      {loading && (
        <>
          <img src={imageURL} alt={title} />
          <div>
            <h1>{title}</h1>
            <p>{popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            {/* <li>
              <Link to="reviews">
                Reviews
              </Link>
            </li> */}
          </ul>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
