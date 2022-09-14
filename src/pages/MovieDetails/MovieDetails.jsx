import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/API';
import { MovieDetailsStyled } from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setMovie(movie);
      setLoading(true);
    });
  }, [movieId]);
  const { title, poster_path, popularity, release_date, overview, genres } =
    movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = new Date(release_date).getUTCFullYear();
  return (
    <main>
      {loading && (
        <>
          <Link to={backLinkHref}>Go back</Link>
          <MovieDetailsStyled>
            <img src={imageURL} alt={title} />
            <div>
              <h1>
                {title}({date})
              </h1>
              <p>Popularity: {Math.round(popularity)}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              {genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </div>
          </MovieDetailsStyled>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </main>
  );
};

export default MovieDetails;
