import "./styles.css";
import HeartSvg from "../../assets/heart.svg";
import BookmarkSvg from "../../assets/bookmark.svg";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";
import { useState } from "react";
import ReviewModal from "../ReviewModal";
import HandleUserActions from "../../pages/handleUserActions.js";
import { MovieContext } from "../../Context/MovieContext";
import { useContext } from "react";

function MovieInfoOptions(movieContext) {
  const { handleAddToMovielistClick,
          handleLikeClick,
        } = HandleUserActions();

  const [showModal, setShowModal] = useState(false);
  const [context, setContext] = useContext(MovieContext)
  const userId = localStorage.getItem("userId")
  const movieId = context.id;

  const handleClick = () => {
    setShowModal(true);
  };

  const handleLike = () =>{
    const sendMovieToLikes = async () =>{
      console.log(`http://localhost:4001/list/${userId}/Curtidos`)
      let movieIdS = movieId.toString();
      console.log(movieIdS)
      try{
        let dataResponse = await fetch(`http://localhost:4001/list/${userId}/Curtidos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: userId,
              listName: "Curtidos",
              movieId: movieIdS
            }),
        });
        console.log("estou aqui")
        if(dataResponse.status === 201){
            console.log("Passsou ok")
        }else{
            console.log("Ja esta no servidor esse filme")
        }
      }catch(error){
        console.log(error);
      }
    }
    sendMovieToLikes();
  }

  return (
    <div className="options">
      <div className="like">
        <button onClick={handleLike}>
          <img className="heartSvg" src={HeartSvg} alt="Ícone de like" />
          Like
        </button>
      </div>
      <div className="watchlist">
        <button onClick={() => handleAddToMovielistClick("movieID")}>
          <img className="bookmarkSvg" src={BookmarkSvg} alt="Ícone de adicionar a movielist" />
          Add to movielist
        </button>
      </div>
      <div className="feedback">
        <button onClick={handleClick}>
          <img className="feedbackSvg" src={FeedbackSvg} alt={"Feedback icon"} />
          Add a review
        </button>
      </div>
      {showModal && (
        <ReviewModal movie={movieContext} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default MovieInfoOptions;
