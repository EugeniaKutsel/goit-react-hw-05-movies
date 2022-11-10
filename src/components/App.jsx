import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import Navigation from "./NavBar/NavBar";

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies /> } />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}></Route>
        </Route>
        <Route path="*" element={<Navigate to='/' />} />
        </Routes>
        </Suspense>
    </>
  );
};

export default App;
