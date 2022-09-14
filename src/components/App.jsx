import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import { lazy, Suspense } from 'react';
import { Header, Link, Container } from 'components/App.styled';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/movies">
            Movies
          </Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />;
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
