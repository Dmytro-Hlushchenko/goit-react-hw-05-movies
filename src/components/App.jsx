import { Route, Routes } from "react-router-dom";
import { React} from "react";
import { Link } from "./App.styled";
import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";

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
        <Route path="/movies" element={<MoviesPage>Movies</MoviesPage>}></Route>
        <Route path="/movies/cast" element={<div>Casts</div>}></Route>
        <Route path="/movies/reviews" element={<div>Reviews</div>}></Route>
      </Routes>
    </div>
        );
};
