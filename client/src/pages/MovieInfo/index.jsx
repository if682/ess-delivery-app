import Header from "../../components/Header";
import MovieInfoCard from "../../components/MovieInfoCard";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";
import "./styles.css";
import { useState, useEffect } from "react";
import api from "../../services/api";

function MovieInfo() {

  const [movieReviews, setMovieReviews] = useState();

  const movieInfo = {
    image: localStorage.getItem('posterPath'),
    name: localStorage.getItem('title'),
    year: localStorage.getItem('year'),
    parentalRating: "14",
    duration: localStorage.getItem('duration'),
    description:localStorage.getItem('description'),
    movieId: localStorage.getItem('id'),
  };


  useEffect(() => {
    const fetchMovieReviews = async () => {
        try {
          const response = await api.get(`review/movie/${movieInfo.movieId}`);
          setMovieReviews(response.data);
        } catch (error) {
          alert("Erro ao pegar reviews do filme");
        }
      };
      fetchMovieReviews();
  }, [movieInfo.movieId]);

  return (
    <div className="page">
      <Header />
      <MovieInfoCard {...movieInfo} />
      <div className="reviews">
        <div className="reviewsTitle">
          <img className="reviewFeedbackSvg" alt={"Feedback icon"} src={FeedbackSvg} />
          Reviews
        </div>
        <hr className="reviewsHr" />
        {movieReviews?.reviews?.map((review, index) => {
          return (
            <>
              <div  key={review.author.name} className="singleReview">

                <img
                  className="singleReviewImage"
                  src={review.author.photo ? review.author.photo : '../../assets/avatar-default.png'}
                  alt={`Foto de ${review.author.name}`}
                />
              
                <div className="reviewBox">
                  <div className="reviewedBy">
                    <div>
                      Reviewed by <b>{review.author.name}</b>
                    </div>
                      <img className="reviewStarSvg" src={StarSvg} alt={"Star icon"} />
                      {review.rating}/5
                  </div>
                  <div className="reviewText">{review.review}</div>
                </div>
              </div>
              {index < movieReviews.reviews.length - 1 && <hr className="singleReviewHr" />}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MovieInfo;
