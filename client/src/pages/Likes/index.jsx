import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import Movie from "../../components/Movie";
import "./styles.css";
import HandleUserActions from "../handleUserActions";
import api from "../../services/api";

const userId = localStorage.getItem("userId");
const port = 4001;

const Likes = () => {
  const listName = "Likes";
  const [sortOption, setSortOption] = useState("select");
  const [filterOption, setFilterOption] = useState("select");
  const [username, setUsername] = useState("");
  const [movies, setMovies] = useState([]);
  const { getMovieInfo } = HandleUserActions();

  // cria uma cópia da lista de filmes original para que ela não seja alterada ao aplicar os filtros e ordenações
  const originalMovies = [...movies];

  function handleFilterOptionChange(e) {
    setFilterOption(e.target.value);
  }

  const handleFilterClick = () => {
    // o filtro será sempre aplicado sobre a lista de filmes original
    let filteredMovies = [...originalMovies];

    if (filterOption === "year") {
      const selYear = prompt("Digite o ano que deseja filtrar:");
      
      // verifica se o ano digitado é um número
      if (/^\d+$/.test(selYear)) {
        filteredMovies = filteredMovies.filter(movie => movie.release_date.substring(0, 4) === selYear);
      }
      
      else {
        alert("Digite um ano válido.");
      }
    }
    
    else if (filterOption === "genre") {
      const selGenre = prompt("Digite o gênero que deseja filtrar:");
    
      if (selGenre) {
        filteredMovies = filteredMovies.filter(movie => movie.genres.name.includes(selGenre));
      }
    }

    else {
      alert("Selecione uma opção de filtro.");
      filteredMovies = [...originalMovies];
    }

    setMovies(filteredMovies);
  };
  
  function handleSortOptionChange(e) {
    setSortOption(e.target.value);
  }

  const handleSortClick = () => {
    let sortedMovies = [...originalMovies];
  
    if (sortOption === "year-asc") {
      sortedMovies.sort((a, b) => a.release_date.substring(0, 4) - b.release_date.substring(0, 4));
    }
    
    else if (sortOption === "year-desc") {
      sortedMovies.sort((a, b) => b.release_date.substring(0, 4) - a.release_date.substring(0, 4));
    }
    
    else if (sortOption === "alphabetical") {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    else {
      alert("Selecione uma opção de ordenação.");
      sortedMovies = [...originalMovies];
    }
  
    setMovies(sortedMovies);
  };

  useEffect(() => {
    // atualiza a lista de filmes na interface sempre que o estado de movies for atualizado
  }, [movies]);

  useEffect(() => {
    // pega o nome do usuário logado
    const handleGetUsername = async () => {
      try {
        let response = await fetch(`http://localhost:${port}/profile/${userId}`, {
          method: "GET",
        });
  
        if (response.ok) {
          let data = await response.json();
          setUsername(data.user.username);
          console.log("Peguei o username com sucesso.");
        } else {
          console.log("Ocorreu um erro ao pegar o username.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    // pega os filmes da lista de likes do usuário
    const fetchMovies = async () => {
      let movielist;
      try {
        const response = await api.get(`list/${userId}/Curtidos`);
        movielist = Object.values(response.data).flat(); // é um array contendo os moviesId
        let moviesTemp = [];

        for (let i = 0; i < movielist.length; i++) {
          const movieInfo = await getMovieInfo(movielist[i]); // pega as informações de cada filme
          moviesTemp.push(movieInfo); // armazena no array
        };
        setMovies([...moviesTemp.flat()]);
      } catch (error) {
        alert("Erro ao pegar filmes curtidos do usuário.");
        // exibe uma janela de diálogo perguntando ao usuário se ele realmente deseja excluir a lista
      }};

    handleGetUsername();
    fetchMovies();
  }, []);

  return (
    <div className="likes-page">
      <Header />
      <MovielistHeader userAvatar="../../assets/avatar-default.png" username={username} listName={listName} />
      
      <div className="filter-sort-icons">
        <div className="filter-container">
          <div className="filter-dropdown">
            <select onChange = {(e) => handleFilterOptionChange(e)}>
              <option value="select">Select</option>
              <option value="year">Filter by year</option>
              <option value="genre">Filter by genre</option>
            </select>
          </div>
          <button className="filter-button" onClick={() => handleFilterClick()}>Filter</button>
        </div>

        <div className="sort-container">
          <div className="sort-dropdown">
            <select onChange = {(e) => handleSortOptionChange(e)}>
              <option value="select">Select</option>
              <option value="alphabetical">Sort by alphabetical order</option>
              <option value="year-asc">Sort by year - ascending</option>
              <option value="year-desc">Sort by year - descending</option>
            </select>
          </div>

          <button className="sort-button" onClick={() => handleSortClick()}>Sort</button>
        </div>
      </div>

      <div className="movies-grid">
        {movies && movies.map((movie) => (
          <div className="movie-wrapper" key={movie.id}>
            <Movie poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} movieId={movie.id} year={movie.release_date.substring(0, 4)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
