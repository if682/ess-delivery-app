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

const port = 4001;
const lists = JSON.parse(localStorage.getItem("userLists")).filter((list) => list.name !== "Curtidos" && list.name !== "Historico");

function MovieInfoOptions(movieContext) {
  const { handleAddToMovielistClick,
          handleLikeClick,
        } = HandleUserActions();

  const [showModal, setShowModal] = useState(false);
  const [context, setContext] = useContext(MovieContext)
  const userId = localStorage.getItem("userId")
  const movieId = context.id;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleLike = () =>{
    const sendMovieToLikes = async () =>{
      let movieIdS = movieId.toString();
      try{
        let dataResponse = await fetch(`http://localhost:${port}/list/${userId}/Curtidos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: userId,
              listName: "Curtidos",
              movieId: movieIdS,
              title: context.title,
              cover: context.posterPath,
              description: context.description
            }),
        });
        if(dataResponse.status === 201){
            console.log("Salvei no Likes")
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
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img className="bookmarkSvg" src={BookmarkSvg} alt="Ícone de adicionar a movielist" />
          Add to movielist
        </button>
        {isDropdownOpen && (
          <div className="dropdown-container">
            <p>Add to list:</p>
            {lists.map((list) => (
              <button key={list.name} onClick={() => handleAddToMovielistClick(movieId, list.name)}>
                {list.name}
              </button>
            ))}
          </div>
        )}
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
