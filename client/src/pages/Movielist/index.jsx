import React from "react";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import Movie from "../../components/Movie";
import "./styles.css";

const Movielist = () => {
  const movies = [
    { title: "The Godfather", year: 1972 },
    { title: "Come and See", year: 1985 },
    { title: "Movie 3", year: 2021 },
    { title: "Movie 4", year: 2021 },
    { title: "Movie 5", year: 2021 },
    { title: "Movie 6", year: 2021 },
    { title: "Movie 7", year: 2021 }
  ];

  const listName = "Movielist";

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
    <div className="movielist-page">
      <Header />
      <MovielistHeader userAvatar="../../assets/profile-pic.svg" username="Mia Goth" listName={listName} />
      
      <div className="filter-sort-icons">
          <button className="filter-year-button" onClick={handleFilterByYearClick}>
            <div className="button-container">
              <p>Filter by year</p>
              <img src="../../assets/chev-down-icon.svg" alt="Ícone de filtro por ano" />
            </div>
          </button>
          <button className="filter-genre-button" onClick={handleFilterByGenreClick}>
            <div className="button-container">
              <p>Filter by genre</p>
              <img src="../../assets/chev-down-icon.svg" alt="Ícone de filtro por gênero" />
            </div>
          </button>
          <button className="sort-button" onClick={handleSortClick}>
            <div className="button-container">
              <p>Sort by</p>
              <img src="../../assets/sort-icon.svg" alt="Ícone de sort" />
            </div>
          </button>
      </div>
      
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <Movie key={index} poster="../../assets/movie-poster.svg" title={movie.title} year={movie.year} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
