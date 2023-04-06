import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import Movie from "../../components/Movie";
import "./styles.css";

const Movielist = () => {
  const [movies, setMovies] = useState([
    { title: "The Godfather", year: 1972 },
    { title: "Come and See", year: 1985 },
    { title: "Movie 3", year: 2021 },
    { title: "Movie 4", year: 2021 },
    { title: "Movie 5", year: 2021 },
    { title: "Movie 6", year: 2021 },
    { title: "Movie 7", year: 2021 }
  ]);

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

  const handleDeleteMovieFromListClick = (event, title) => {
    event.stopPropagation();
    
    // exibe uma janela de diálogo perguntando ao usuário se ele realmente deseja excluir o filme da lista
    const userConfirmation = window.confirm(`Tem certeza que deseja excluir o filme "${title}" da lista?`);
    
    if (userConfirmation) {
      // cria um novo array de filmes sem o filme selecionado
      const newMovies = movies.filter(movie => movie.title !== title);
      // atualiza o estado dos filmes com o novo array sem o filme selecionado
      setMovies(newMovies);
    }
  }

  useEffect(() => {
    // atualiza a lista de filmes na interface sempre que o estado de movies for atualizado
  }, [movies]);

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
          <div className="movie-wrapper" key={index}>
            <Movie poster="../../assets/movie-poster.svg" title={movie.title} year={movie.year}/>
            <button className="delete-movie" onClick={(event) => handleDeleteMovieFromListClick(event, movie.title)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movielist;
