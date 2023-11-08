import { getReviews, getErrore } from "API";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader';

export default function Reviews() { 
    
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        getReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
            .catch(getErrore)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <>
        <h3>Reviews:</h3>
        {loading && <Loader />}
        {reviews.length !== 0 ?
            <ul>
                {reviews.map(({ id, author, content }) =>
                    <li key={id}>
                        <p><b>Author:</b> {author}</p>
                        <p>{content}</p>
                    </li>)}
            </ul> :
            <p>Не маємо інформації по цьому фільму...</p>}
    </>
};