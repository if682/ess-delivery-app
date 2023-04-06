import React from "react";
import "./style.css";


const ProfileSections = () => {

  const handleFilmes = () =>{
    alert("Mostrar filmes");
  }

  const handleReviews = () => {
    alert("Mostrar reviews");
  }

  const handleLikes = () => {
    alert("Mostrar likes")
  }

  const handleWatchList = () => {
    alert("Mostrar WatchList");
  }

  return (
    <section className="profile-sections">
        <div className="films">
          <button onClick={handleFilmes}>
            <img src="../../assets/movie.svg" alt=""/>
            <span>Films</span>
          </button>
        </div>

        <div className="reviews">
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
