import { getCredits, getErrore } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader';

export default function Cast() {

   const { movieId } = useParams();
   const [cast, setCast] = useState([]);
   const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        getCredits(movieId)
            .then(data => {
                setCast(data.cast);
            })
            .catch(getErrore)
            .finally(() => setLoading(false));
    }, [movieId]);
   
   return (
      <>
         {loading && <Loader />}
         <div>Casts
             {cast.length !== 0 ?
            <ul>
                {cast.map(({ id, name, character, profile_path }) =>
                    <li key={id}>
                        <b>{name}</b>
                        <p>Character: {character}</p>
                        <img src={`http://image.tmdb.org/t/p/w185${profile_path}`}
                        alt={name} width="100" height="150" />
                    </li>)}
            </ul> :
            <p>Не маємо інформації по цьому фільму...</p>
        }
         </div>
      </>)
      
}