import Loader from "components/Loader/Loader";
import { getMoviesDetails } from "components/services/API";
import { useState, useEffect, Suspense } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import css from "../MovieDetails/MovieDetails.module.css";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/'
  

  useEffect(() => {
    getMoviesDetails(Number(movieID)).then(setMovie)
  }, [movieID])

  

  return (
    <>
      <Link to={backLink} className={css.goBackLink}> Go back</Link>
      {movie &&
        <div className={css.movie}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='300' height='450' />
          <div className={css.movieInfo}>
            <h1>{movie.title}</h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={css.movieGenres}>{movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
            <div className={css.buttonList}>
              <button type="button" onClick={() => { navigate('cast') }} className={css.movieBtn}>Cast</button>
              <button type="button" onClick={() => { navigate('reviews') }} className={css.movieBtn}>Reviews</button>
            </div>
          </div>
        </div>
      }
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;