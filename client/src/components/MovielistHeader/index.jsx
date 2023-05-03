import React from "react";
import HandleUserActions from "../../pages/handleUserActions.js";
import "./styles.css";

const MovielistHeader = ({ userAvatar, username, listName }) => {
  const { handleUserAvatarClick,
          handleUserHistoryClick,
          handleUserLikedFilmsClick,
          handleUserReviewsClick,
          handleUserMovielistsClick
        } = HandleUserActions();

  return (
    <div className="movielist-header">
      <div className="listname-container">
          <div className="user-info">
            <img className="user-avatar" src={userAvatar} alt="Avatar do usuário" onClick={() => handleUserAvatarClick()} />
            <h1 className="user-name">{username}'s {listName}</h1>
          </div>
          <div className="buttons-container">
            <button className="watched-films-button" onClick={() => handleUserHistoryClick()} >
            <img src="../../assets/films-icon.svg" alt="Ícone de filmes assistidos" />
            </button>
            <button className="like-button" onClick={() => handleUserLikedFilmsClick()}>
            <img src="../../assets/like-icon.svg" alt="Ícone de like" />
            </button>
            <button className="review-button" onClick={() => handleUserReviewsClick()}>
            <img src="../../assets/review-icon.svg" alt="Ícone de review" />
            </button>
            <button className="movielist-button" onClick={() => handleUserMovielistsClick()}>
            <img src="../../assets/movielist-icon.svg" alt="Ícone de movielist" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default MovielistHeader;
