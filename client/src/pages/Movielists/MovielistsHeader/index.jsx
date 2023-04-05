import React from "react";
import {
  handleUserAvatarClick,
  handleUserWatchedFilmsClick,
  handleUserLikedFilmsClick,
  handleUserReviewsClick,
  handleUserMovielistsClick
} from "../../handleClick.js";

const MovielistsHeader = ({ userAvatar, username }) => {
  return (
    <div className="movielist-header">
      <div className="listname-container">
          <div className="user-info">
            <img className="user-avatar" src={userAvatar} alt="Avatar do usuário" onClick={() => handleUserAvatarClick(username)} />
            <h1 className="user-name">{username}'s Lists</h1>
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
    </div>
  );
};

export default MovielistsHeader;
