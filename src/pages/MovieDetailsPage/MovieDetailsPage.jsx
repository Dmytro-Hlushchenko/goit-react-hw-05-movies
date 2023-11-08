import { getMovieDetails, getErrore } from "API";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Loader from 'components/Loader';

export default function MovieDetails() {
     
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) {
            return;
        };

        getMovieDetails(movieId)
            .then(data => {
                setMovie(data);
            })
            .catch(getErrore)
            .finally(() => setLoading(false));
    }, [movieId]);

     if (!movie) {
        return;
    };

    const { id, title, poster_path, original_title, release_date, vote_average, overview } = movie;

    return (
        <>  
            <Link>Back</Link>
            <h2>{title}</h2>
            {loading && <Loader></Loader>}
            {movie &&
                <div>
                    <img src={`http://image.tmdb.org/t/p/w154${poster_path}`}
                        alt={title} width="154" height="231" />
                    <h3>{original_title}</h3>
                    <p><b>Release date:</b> {release_date}</p>
                    <p><b>Ranking:</b> {vote_average}</p>
                    {/* <p><b>Genres:</b>{genres}</p> */}
                    <p><b>Overview: </b>{overview}</p>
                </div>
            }
            <div>
                <h3>Additional information:</h3>
                <ul>
                    <li>
                        <Link to={`/movies/${id}/cast`}>Cast</Link>
                    </li>
                     <li>
                        <Link>Reviews</Link>
                    </li>
                </ul>
                <Outlet></Outlet>
            </div>
            
        </>
       
    )
};