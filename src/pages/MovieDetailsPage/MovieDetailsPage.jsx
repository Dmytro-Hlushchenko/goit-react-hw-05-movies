import { getMovieDetails, getErrore } from "API";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

     if (!movie) {
        return;
    };

    // const genres = function movieGenres() {
    //     movie.genres.map(({ name }) => `${name}, `)
    //     movieGenres();
    // };

    return (
        <>  
            <Link>Back</Link>
            <h2>{movie.title}</h2>
            {loading && <Loader></Loader>}
            {movie &&
                <div>
                    <img src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`}
                        alt={movie.title} width="154" height="231" />
                    <h3>{movie.original_title}</h3>
                    <p><b>Release date:</b> {movie.release_date}</p>
                    <p><b>Ranking:</b> {movie.vote_average}</p>
                    {/* <p><b>Genres:</b>{genres}</p> */}
                    <p><b>Overview: </b>{movie.overview}</p>
                </div>
            }
            <div>
                <h3>Additional information:</h3>
                <ul>
                    <li>
                        <Link>Cast</Link>
                    </li>
                </ul>
            </div>
            
        </>
       
    )
};