import React from "react";
import "./styles.css";

const Movie = ({ poster, title, year }) => {
  const handleLikeClick = () => {
    alert(`Curtiu o filme ${title}`);
  };

  const handleAddToWatchlistClick = () => {
    alert(`Adicionou ${title} à watchlist`);
  };

  return (
    <div className="movie-container">
      <div className="button-container">
        <button className="add-to-watchlist-button" onClick={handleAddToWatchlistClick}>
          <img src="../../assets/add-list-icon.svg" alt="Ícone de adicionar a watchlist" />
        </button>

        <button className="like-button" onClick={handleLikeClick}>
          <img src="../../assets/like-icon.svg" alt="Ícone de like" />
        </button>
      </div>

      <div className="poster-container">
        <img src={poster} alt="Poster do filme" />
      </div>

      <div className="info-container">
        <p className="title">{title}</p>
        <p className="year">Year: {year}</p>
      </div>
    </div>
  );
};

export default Movie;
