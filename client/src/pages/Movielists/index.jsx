import React, { useState } from "react";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import "./styles.css";

const Movielists = () => {
  const [newListTitle, setNewListTitle] = useState("");

  const [lists, setLists] = useState([
    { title: "FILMES PRA VER COM A MÃE" },
    { title: "Só os clássicos" },
    { title: "todos os shrek" },
    { title: "filmes que eu não gosto pra recomendar pra quem eu odeio" }
  ]);

  const handleUserListClick = ({ title }) => {
    alert(`Aqui deve ir para a página da lista ${title}`);
  };

  const handleNewListTitleChange = (event) => {
    setNewListTitle(event.target.value);
  };

  const handleCreateListClick = () => {
    if (newListTitle.trim() !== "") {
      const existingList = lists.find((list) => list.title.toLowerCase() === newListTitle.trim().toLowerCase());
      if (existingList) {
        alert(`A lista "${newListTitle.trim()}" já existe!`);
      } else {
        setLists([...lists, { title: newListTitle.trim() }]);
        setNewListTitle("");
      }
    }
    else{
      alert("Lista com nome vazio...");
    }
  };

  return (
    <div className="movielists-page">
      <Header />
      <MovielistHeader userAvatar="../../assets/profile-pic.svg" username="Mia Goth" listName="Lists" />
      
      <div className="movielists-list">
        <div className="movielists-new-list">
          <input
            type="text"
            placeholder="Create a new list"
            value={newListTitle}
            onChange={handleNewListTitleChange}
          />
          <button onClick={handleCreateListClick}>Create</button>
        </div>

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
