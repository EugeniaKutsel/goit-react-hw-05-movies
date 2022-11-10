import { searchMovies } from "components/services/API";
import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
 import 'react-toastify/dist/ReactToastify.css';
import css from '../Home/Home.module.css';
import style from '../Movies/Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  

  useEffect(() => {
      if (!query) {
        return;
    }
    searchMovies(query).then(setMovies)
  }, [query])

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };


  return (
    <>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <input type="text" name="query" className={style.searchInput} />
        <button type="submit" className={style.searchBtn}>Search</button>
      </form>
      <ul className={css.homeList}>{movies.map(({ id, title, poster_path }) =>
        <li key={id} className={css.homeItem}>
          <Link to={`/movies/${id}`} state={{from: location}} className={css.homeLink}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width='300' height='350'/>
            <p className={css.homeText}>{title}</p>
          </Link>
        </li>)}
      </ul>
    </>
  );
}
 
export default Movies;