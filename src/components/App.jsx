import { Route, Routes } from "react-router-dom";
import { React, lazy, Suspense } from "react";
import { Link } from "./App.styled";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"))

export const App = () => {
  
  return (
    <Suspense>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage>Home</HomePage>}></Route>
        <Route path="movies" element={<MoviesPage>Movies</MoviesPage>}></Route>
        <Route path="movies/:movieId" element={<MovieDetails>MovieDetails</MovieDetails>}>
          <Route path="cast" element={<Cast>Casts</Cast>}></Route>
          <Route path="reviews" element={<Reviews>Reviews</Reviews>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
