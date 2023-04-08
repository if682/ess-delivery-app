import "./styles.css";
import HeartSvg from "../../assets/heart.svg";
import BookmarkSvg from "../../assets/bookmark.svg";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";

function MovieInfoOptions(data) {
  return (
    <div className="options">
      <div className="liked">
        <img className="heartSvg" src={HeartSvg} alt={"Heart icon"} />
        Liked
      </div>
      <div className="watchlist">
        <img className="bookmarkSvg" src={BookmarkSvg} alt={"Bookmark icon"} />
        Watchlist
      </div>
      <div className="feedback">
        <img className="feedbackSvg" src={FeedbackSvg} alt={"Feedback icon"} />
        Add a review
      </div>
      <div className="rating">
        <img className="starSvg" src={StarSvg} alt={"Star icon"} />
        {data.rating}/10
      </div>
    </div>
  );
}

export default MovieInfoOptions;
