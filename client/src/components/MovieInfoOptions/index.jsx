import "./styles.css";
import HeartSvg from "../../assets/heart.svg";
import BookmarkSvg from "../../assets/bookmark.svg";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";
import { useState } from "react";
import ReviewModal from "../ReviewModal";
import HandleUserActions from "../../pages/handleUserActions.js";

function MovieInfoOptions(data) {
  const { handleAddToMovielistClick,
          handleLikeClick,
        } = HandleUserActions();

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="options">
      <div className="like">
        <button onClick={() => handleLikeClick("movieID")}>
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
      <div className="rating">
        <img className="starSvg" src={StarSvg} alt={"Star icon"} />
        {data.rating}/10
      </div>
      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default MovieInfoOptions;
