import { getMovieDetails, getErrore } from "API";
import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Loader from 'components/Loader';
import { AddLink, BackLink } from './MovieDetailsPage.styled';
import { IoArrowBack } from 'react-icons/io5';
import { Section } from "./MovieDetailsPage.styled";


export default function MovieDetails() {
     
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = (location.state?.from ?? '/');
   
    
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

    const { id, title, poster_path, original_title, release_date, vote_average, overview, genres } = movie;

    return (
        <Section>  
            <BackLink to={backLink}><IoArrowBack></IoArrowBack>Go back</BackLink>
            <h2>{title}</h2>
            {loading && <Loader></Loader>}
            {movie &&
                <div>
                    <img src={poster_path ? `http://image.tmdb.org/t/p/w154${poster_path}` :
                        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                        alt={title} width="154" height="231" />
                    <h3>{original_title}</h3>
                    <p><b>Release date:</b> {release_date}</p>
                    <p><b>Ranking:</b> {vote_average}</p>
                    <p><b>Genres: </b> {genres && genres.map(({name}) => `${name} | `)}</p>
                    <p><b>Overview: </b>{overview}</p>
                </div>  
            }
            <div>
                <h3>Additional information:</h3>
                <ul>
                    <li>
                        <AddLink to={`/movies/${id}/cast`}>Cast</AddLink>
                    </li>
                     <li>
                        <AddLink to={`/movies/${id}/reviews`}>Reviews</AddLink>
                    </li>
                </ul>
                <Outlet></Outlet>
            </div>
        </Section>
    )
};


