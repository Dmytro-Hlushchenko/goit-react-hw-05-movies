import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ films }) {
  
  const location = useLocation(); 

  return (
    <ul>
          {
             films.map(({id, title}) => (
            <li key={id}>
                 <Link to={`/movies/${id}`} state={{from: location }}>
                          {title}
                    </Link> 
            </li>))
        }
    </ul>
  )
};