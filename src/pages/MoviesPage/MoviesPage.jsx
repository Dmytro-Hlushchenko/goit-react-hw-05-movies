import SearchBar from "../../components/SearchBar/SearchBar";
import { getSearchMovies, getErrore } from "../../API";
import { useState, useEffect } from "react";
import Loader from 'components/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage() {

  const [loading, setLoading] = useState(false);
  const [films, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchBtn = (search) => {
    setSearch(search);
  }
  
  useEffect(() => {
    if (search === '') {
      return;
    };
    
    if (films.length > 0) {
      return;
    };

    setLoading(true);
    getSearchMovies(search)
      .then(data => {
        setMovies(data.results);
      })
      .catch(getErrore)
      .finally(() => setLoading(false));

  }, [films, search]);
  
   return (
        <>
          <SearchBar onSearchBtn={onSearchBtn}></SearchBar>
          {loading && <Loader />}
          <MoviesList films={films} ></MoviesList>
        </>
      )
};