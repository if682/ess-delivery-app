import React from "react";
import "./styles.css";

const Movie = ({ poster, title, year }) => {
  const handleLikeClick = () => {
    alert(`Curtiu o filme ${title}`);
  };

  const handleAddToMovielistClick = () => {
    alert(`Aqui deve perguntar para qual movielist se deseja adicionar o filme ${title}`);
  };

  const handleMovieClick = () => {
    alert(`Aqui deve ir para a página do filme ${title}`);
  };

  return (
    <div className="movie-container">
      <div className="button-container">
        <button className="add-to-movielist-button" onClick={handleAddToMovielistClick}>
          <img src="../../assets/add-list-icon.svg" alt="Ícone de adicionar a movielist" />
        </button>

        <button className="like-button" onClick={handleLikeClick}>
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
