import { getMoviesCast } from "components/services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "../Cast/Cast.module.css";
import notFoundActor from '../images/notFound.png';


const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMoviesCast(Number(movieID)).then(setActors);
  }, [movieID])

  return (
    <div className={css.cast}>
      <h2 className={css.castTitle}>Cast</h2>
      <ul className={css.castList}>
        {actors.map(({ id, name, profile_path, character }) =>
          <li key={id} className={css.castItem}>
            <img src={
              profile_path ?
                `https://image.tmdb.org/t/p/w300/${profile_path}` : notFoundActor} alt={name} width='200' height='300' />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>)}
      </ul>
    </div>
  );
}

export default Cast;