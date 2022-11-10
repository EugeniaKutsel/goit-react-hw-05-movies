import { getTrendingMovies } from "components/services/API";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import css from '../Home/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, [])

  return (
    <>
      <h1 className={css.homeTitle}>Trending today</h1>
      <ul className={css.homeList}>
        {movies.map(({ id, title, name, poster_path }) =>
          <li key={id} className={css.homeItem}>
            <Link to={`movies/${id}`} state={{from: location}} className={css.homeLink}>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title ?? name} width='300' height='350' />
              <p className={css.homeText}>{title ?? name}</p>
            </Link>
          </li>)}
      </ul>
    </>
  );
}

export default Home;