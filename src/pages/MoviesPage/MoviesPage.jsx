import { getSearchMovies, getErrore } from "../../API";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from 'components/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage () {

  const [loading, setLoading] = useState(false);
  const [films, setMovies] = useState([]);
    
  const [params, setSearchParams] = useSearchParams();
  const search = params.get('query') ?? '';
  // const searchQuery = params.get('query') ?? "";

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

  const onSubmitSearchBar = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase();
    
    if (searchValue === '') {
      setSearchParams({});
      setMovies([]);
      return;
    };

    if (searchValue === search) {
      return;
    };

    setSearchParams({ query: searchValue });
    setMovies([]);
  };

  
    return (
      <>
        <SearchBar onSubmitSearchBar={onSubmitSearchBar} value={search}></SearchBar>
        {loading && <Loader />}
        <MoviesList films={films} ></MoviesList>
      </>
    )
};