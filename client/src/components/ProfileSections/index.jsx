import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


const ProfileSections = () => {

  let navigate = useNavigate();

  const handleFilmes = () =>{
    navigate('/profile?tab=movies');
  }

  const handleReviews = () => {
    navigate('/profile?tab=reviews');
  }

  const handleLikes = () => {
    alert("Mostrar likes")
  }

  const handleWatchList = () => {
    let path = `movielists`;
    navigate(path)
  }

  return (
    <section className="profile-sections">
        <div className="films">
          <button onClick={handleFilmes}>
            <img src="../../assets/movie.svg" alt=""/>
            <span>Films</span>
          </button>
        </div>

        <div>
          <button onClick={handleReviews}>
            <img src="../../assets/review.svg" alt=""/>
            <span>Reviews</span>
          </button>
        </div>

        <div className="likes">
          <button onClick={handleLikes}>
            <img src="../../assets/like.svg" alt=""/>
            <span>Likes</span>
          </button>
        </div>
        
        <div className="watchlist">
            <button onClick={handleWatchList}>
              <img src="../../assets/save.svg" alt=""/>
              <span>Watchlist</span>
            </button>
        </div>
    </section>
  );
};

export default ProfileSections;
