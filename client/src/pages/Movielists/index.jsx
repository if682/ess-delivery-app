import React, { useState, useEffect } from "react";
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
      alert("Lista com nome vazio.");
    }
  };

  const handleDeleteListClick = (event, title) => {
    // impede que o evento de clique na lista seja disparado
    event.stopPropagation();
    
    // exibe uma janela de diálogo perguntando ao usuário se ele realmente deseja excluir a lista
    const userConfirmation = window.confirm(`Tem certeza que deseja excluir a lista "${title}"?`);
    
    if (userConfirmation) {
      const newList = lists.filter((list) => list.title !== title);
      setLists(newList);
    }
  };

  useEffect(() => {
    // atualiza a lista na interface sempre que o estado de listas for atualizado
  }, [lists]);
  
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
        {lists.map((list) => (
        <li key={list.title} className="movielists-list-item" onClick={() => handleUserListClick(list)}>
          <div className="list-name-container">
            <button className="delete-list" onClick={(event) => handleDeleteListClick(event, list.title)}>Delete</button>
            <span className="list-name">{list.title}</span>
          </div>
        </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Movielists;
