import React from "react";
import Header from "../../components/Header";
import MovielistsHeader from "./MovielistsHeader";
import "./styles.css";

const Movielists = () => {
  const lists = [
    { title: "FILMES PRA VER COM A MÃE" },
    { title: "Só os clássicos" },
    { title: "todos os shrek" },
    { title: "filmes que eu não gosto pra recomendar pra quem eu odeio" }
  ];

  const handleUserListClick = ( {title} ) => {
    alert(`Aqui deve ir para a página da lista ${title}`);
  };

  return (
    <div className="movielists-page">
      <Header />
      <MovielistsHeader userAvatar="../../assets/profile-pic.svg" username="Mia Goth" />
      <div className="movielists-list">
        <ul>
          {lists.map((list, index) => (
            <li key={index} onClick={() => handleUserListClick(list)}>
              {list.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movielists;
