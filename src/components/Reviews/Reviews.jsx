import { getMoviesReviews } from "components/services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "../Reviews/Reviews.module.css";

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    getMoviesReviews(movieID).then(setReviews);
  }, [movieID])

  return (
    <div className={css.reviews}>
      {reviews.length > 0 ? <ul className={css.reviewsList}>
        {reviews.map(({ id, author, content }) =>
           <li key={id} className={css.reviewsItem}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
          
        )}
      </ul> : <p>Sorry, there are no reviews yet :(</p>}
      
    </div>
  );
}

export default Reviews;