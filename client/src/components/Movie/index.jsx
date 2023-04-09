import React from "react";
import HandleUserActions from "../../pages/handleUserActions.js";
import "./styles.css";

const Movie = ({ poster, title, year }) => {
  const { handleAddToMovielistClick,
          handleLikeClick,
          handleMovieClick
        } = HandleUserActions();

  return (
    <div className="movie-container">
      <div className="button-container">
        <button className="add-to-movielist-button" onClick={() => handleAddToMovielistClick(title)}>
          <img src="../../assets/add-list-icon.svg" alt="Ícone de adicionar a movielist" />
        </button>

        <button className="like-button" onClick={() => handleLikeClick(title)}>
          <img src="../../assets/like-icon.svg" alt="Ícone de like" />
        </button>
      </div>

      <div className="poster-container" onClick={() => handleMovieClick()} >
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
