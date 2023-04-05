import React from "react";
import {
  handleUserAvatarClick,
  handleUserWatchedFilmsClick,
  handleUserLikedFilmsClick,
  handleUserReviewsClick,
  handleUserMovielistsClick
} from "../../handleClick.js";
import "./styles.css";

const MovielistHeader = ({ userAvatar, username, listName }) => {
  const handleFilterByYearClick = () => {
    alert("Aqui deve filtrar os filmes por ano");
  };

  const handleFilterByGenreClick = () => {
    alert("Aqui deve filtrar os filmes por gênero");
  };

  const handleSortClick = () => {
    alert("Aqui deve ordenar a lista de filmes");
  };

  return (
    <div className="movielist-header">
      <div className="listname-container">
          <div className="user-info">
            <img className="user-avatar" src={userAvatar} alt="Avatar do usuário" onClick={() => handleUserAvatarClick(username)} />
            <h1 className="user-name">{username}'s {listName}</h1>
          </div>
          <div className="buttons-container">
            <button className="watched-films-button" onClick={() => handleUserWatchedFilmsClick(username)} >
            <img src="../../assets/films-icon.svg" alt="Ícone de filmes assistidos" />
            </button>
            <button className="like-button" onClick={() => handleUserLikedFilmsClick(username)}>
            <img src="../../assets/like-icon.svg" alt="Ícone de like" />
            </button>
            <button className="review-button" onClick={() => handleUserReviewsClick(username)}>
            <img src="../../assets/review-icon.svg" alt="Ícone de review" />
            </button>
            <button className="movielist-button" onClick={() => handleUserMovielistsClick(username)}>
            <img src="../../assets/movielist-icon.svg" alt="Ícone de movielist" />
            </button>
          </div>
      </div>
      <div className="filter-sort-icons">
          <button className="filter-year-button" onClick={handleFilterByYearClick}>
          <img src="../../assets/like-icon.svg" alt="Ícone de filtro por ano" />
          </button>
          <button className="filter-genre-button" onClick={handleFilterByGenreClick}>
          <img src="../../assets/like-icon.svg" alt="Ícone de filtro por gênero" />
          </button>
          <button className="sort-button" onClick={handleSortClick}>
          <img src="../../assets/like-icon.svg" alt="Ícone de sort" />
          </button>
      </div>
    </div>
  );
};

export default MovielistHeader;
