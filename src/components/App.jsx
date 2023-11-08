import { Route, Routes } from "react-router-dom";
import { React} from "react";
import { Link } from "./App.styled";
import HomePage from "../pages/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import MovieDetails from "pages/MovieDetailsPage/MovieDetailsPage"
import Cast from "./Cast";

export const App = () => {
  
  return (
    <div>
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
        </Route>
        <Route path="reviews" element={<div>Reviews</div>}></Route>
      </Routes>
    </div>
  );
};
