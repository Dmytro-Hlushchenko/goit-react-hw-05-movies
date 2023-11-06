import { useState, useEffect } from "react";
import { getMovies, getErrore } from "API";
import MoviesList from "components/MoviesList";

const endPoint = "/trending/movie/day";

const HomePage = () => {      
    
    const [loading, setLoading] = useState(false);
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        if (films.length > 0) {
            return
        }
        getMovies(endPoint)
            .then(data => {
                setFilms(data.results);
            })
            .catch(getErrore)
            .finally(() => setLoading(false));
    }, [films]);

    return (
        
        <div>
            <h2>Trending Films</h2>
              {loading && "Loading....."}
            <MoviesList
                films={films}
            >
            </MoviesList>
        </div>
        
        )
};

export default HomePage;