import Header from "../../components/Header";
import MovieInfoCard from "../../components/MovieInfoCard";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";
import { MovieContext } from "../../Context/MovieContext";
import "./styles.css";
import { useContext } from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { LoginContext } from "../../Context/LoginContext";

const port = 4001;

function MovieInfo() {

  const [movieReviews, setMovieReviews] = useState();

  const [context, setContext] = useContext(MovieContext)
  const movieInfo = {
      movieContext:context
  };

  const movieId = context.id;
  const [userContext, setUserContext] = useContext(LoginContext)
  const userId = userContext.userId

  useEffect(() => {
    const sendMovieToHistorico = async () =>{
      let movieIdS = movieId.toString();
      try{
        let dataResponse = await fetch(`http://localhost:${port}/list/${userId}/Historico`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: userId,
              listName: "Historico",
              movieId: movieIdS,
              title: context.title,
              cover: context.posterPath,
              description: context.description
            }),
        });
        if(dataResponse.status === 201){
            console.log("Salvei no historico")
        }else{
            console.log("Ja esta no servidor esse filme")
        }
      }catch(error){
        console.log(error);
      }
    }
    sendMovieToHistorico();
  }, [context]);
  
  useEffect(() => {
    const fetchMovieReviews = async () => {
        try {
          const response = await api.get(`review/movie/${movieId}`);
          setMovieReviews(response.data);
        } catch (error) {
          alert("Erro ao pegar reviews do filme");
        }
      };
      fetchMovieReviews();
  }, [movieId]);

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
              <div key={review.author.name} className="singleReview">

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
