import { Route, Routes } from "react-router-dom";
import { React, lazy, } from "react";
import Layout from "./Layout/";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"))

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
      </Routes>
    </>
  )
};
