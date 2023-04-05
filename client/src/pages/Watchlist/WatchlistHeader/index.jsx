import React from "react";
import "./styles.css";

const WatchlistHeader = ({ userAvatar, username, listName }) => {
  const handleUserAvatarClick = () => {
    alert(`Aqui deve ir para o perfil de ${username}`);
  };

  const handleWatchedFilmsClick = () => {
    alert(`Aqui deve ir para os filmes assistidos de ${username}`);
  };

  const handleLikeClick = () => {
    alert(`Aqui deve ir para os likes de ${username}`);
  };

  const handleReviewClick = () => {
    alert(`Aqui deve ir para as reviews de ${username}`);
  };

  const handleWatchlistClick = () => {
    alert(`Aqui deve ir para a watchlist de ${username}`);
  };

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
    <div className="watchlist-header">
      <div className="listname-container">
          <div className="user-info">
            <img className="user-avatar" src={userAvatar} alt="Avatar do usuário" onClick={handleUserAvatarClick} />
            <h1 className="user-name">{username}'s {listName}</h1>
          </div>
          <div className="buttons-container">
            <button className="watched-films-button" onClick={handleWatchedFilmsClick} >
            <img src="../../assets/films-icon.svg" alt="Ícone de filmes assistidos" />
            </button>
            <button className="like-button" onClick={handleLikeClick}>
            <img src="../../assets/like-icon.svg" alt="Ícone de like" />
            </button>
            <button className="review-button" onClick={handleReviewClick}>
            <img src="../../assets/review-icon.svg" alt="Ícone de review" />
            </button>
            <button className="watchlist-button" onClick={handleWatchlistClick}>
            <img src="../../assets/watchlist-icon.svg" alt="Ícone de watchlist" />
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

export default WatchlistHeader;
