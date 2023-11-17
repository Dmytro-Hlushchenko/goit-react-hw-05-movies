import { getSearchMovies, getErrore } from "../../API";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Loader from 'components/Loader';
import MoviesList from '../../components/MoviesList/';


export default function MoviesPage () {

  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  
    
  const [params] = useSearchParams();
  const search = params.get('query') ?? ''; 

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
        setFilms(data.results);
      })
      .catch(getErrore)
      .finally(() => setLoading(false));

  }, [films, search]);

  return (
      <>
        <SearchBar />
        {loading && <Loader />}
        <MoviesList films={films} />
      </>
    )
};