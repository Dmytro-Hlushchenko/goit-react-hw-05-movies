import { Link } from "react-router-dom";


export default function MoviesList({ films }) {
    console.log(films)
  return(
    <ul>
          {
              films.map(({id, title}) => (
            <li key={id}>
                    <Link to={`/movies/${id}`}>
                          {title}
                    </Link> 
            </li>))
        }
    </ul>
  )
};