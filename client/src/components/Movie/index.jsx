import React from "react";
import HandleUserActions from "../../pages/handleUserActions.js";
import "./styles.css";
import { useState } from "react";


const Movie = ({ poster, title, movieId, year }) => {
  const { handleAddToMovielistClick,
          handleLikeClick,
        } = HandleUserActions();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let lists = [];

  if(localStorage.getItem("userLists") !== null) {
    lists = JSON.parse(localStorage.getItem("userLists")).filter((list) => list.name !== "Curtidos" && list.name !== "Historico");
  }

  return (
    <div className="movie-container">
      <div className="button-container">
        <button className="add-to-movielist-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src="../../assets/add-list-icon.svg" alt="Ícone de adicionar a movielist" />
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
        </button>

        <button className="like-button" onClick={() => handleLikeClick(movieId)}>
          <img src="../../assets/like-icon.svg" alt="Ícone de like" />
        </button>
      </div>

      <div className="poster-container" >
        <img src={poster} alt="Poster do filme" />
      </div>

      <div className="info-container">
        <p className="title">{title}</p>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

export default Movie;
