import React from "react";
import "./style.css";


const ProfileSections = () => {

  return (
    <section className="profile-sections">
        <div className="films">
          <button>
            <img src="../../assets/movie.svg" alt=""/>
            <span>Films</span>
          </button>
        </div>

        <div className="reviews">
          <button>
            <img src="../../assets/review.svg" alt=""/>
            <span>Reviews</span>
          </button>
        </div>

        <div className="likes">
          <button>
            <img src="../../assets/like.svg" alt=""/>
            <span>Likes</span>
          </button>
        </div>
        
        <div className="watchlist">
            <button>
              <img src="../../assets/save.svg" alt=""/>
              <span>Watchlist</span>
            </button>
        </div>
    </section>
  );
};

export default ProfileSections;
