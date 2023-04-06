import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import Movie from "../../components/Movie";
import "./styles.css";

const Movielist = () => {
  const [sortOption, setSortOption] = useState("select");
  const [filterOption, setFilterOption] = useState("select");

  const [movies, setMovies] = useState([
    { title: "The Godfather", year: 1972, genre: ["Crime"] },
    { title: "Come and See", year: 1985, genre: ["War"] },
    { title: "Filme", year: 1998, genre: ["Comedy", "Drama"] },
    { title: "Movie 4", year: 2002, genre: ["Drama"] },
    { title: "Qualquer um", year: 1950, genre: ["Comedy", "War"] },
    { title: "Abc", year: 2028, genre: ["Comedy", "Drama"] },
    { title: "123 Filme", year: 2000, genre: ["Comedy"] },
  ]);

  const originalMovies = [...movies];

  const listName = "Movielist";

  const handleFilterClick = () => {
    // o filtro será sempre aplicado sobre a lista de filmes original
    let filteredMovies = [...originalMovies];

    if(filterOption === "year") {
      const selYear = prompt("Digite o ano que deseja filtrar:");

      if (/^\d+$/.test(selYear)) {
        filteredMovies = filteredMovies.filter(movie => movie.year === selYear);
      }      
    }

    else if(filterOption === "genre") {
      const selGenre = prompt("Digite o gênero que deseja filtrar:");

      if(selGenre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(selGenre));
      }
    }

    else {
      alert("Selecione uma opção de filtro.");
      filteredMovies = [...originalMovies];
    }

    setMovies(filteredMovies);
    setFilterOption("select");
  };
  
  const handleSortClick = () => {
    const sortedMovies = [...movies];

    if(sortOption === "year-asc") {
      sortedMovies.sort((a, b) => a.year - b.year);
    }

    else if(sortOption === "year-desc") {
      sortedMovies.sort((a, b) => b.year - a.year);
    }

    else if(sortOption === "alfabetical") {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    else{
      alert("Selecione uma opção de ordenação.");
      sortedMovies = originalMovies;
    }

    setMovies(sortedMovies);
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
