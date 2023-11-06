import { getMovieDetails, getErrore } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader';


const endPoint = '/movie';

export default function MovieDetails() {
     
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) {
            return;
        };

        getMovieDetails(endPoint, movieId)
            .then(data => {
                setMovie(data);
            })
            .catch(getErrore)
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <>
            <h2>Movie Details:</h2>
            {loading && <Loader></Loader>}
            <img src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`}
                alt={movie.title} width="154" height="231" />
            <h3>{movie.title}</h3>
        </>
       
    )
};