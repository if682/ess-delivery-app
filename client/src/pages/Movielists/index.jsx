import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import "./styles.css";

// ID provisório do usuário para testes
const userId = "e84ba398-64fe-4929-b9a6-1e065cbdca2b";

const Movielists = () => {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");
  const navigate = useNavigate();

  let handleGetLists = async (e) =>{
      e.preventDefault();
      try{
          let res = await fetch(`http://localhost:4002/list/${userId}`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              }
          });

          if(res.ok){
              console.log("Passou ok")
              let data = await res.json();
              setLists(data);
          }else{
            console.log("Ocorreu um erro no GET.")
          }
      }catch (err){
          console.log(err);
      }
  };

  const handleUserListClick = ({ title }) => {
    alert(`Aqui deve ir para a página da lista ${title}`);
    let path = `/profile/movielists/movielist`;
    navigate(path);
  };

  const handleNewListTitleChange = (event) => {
    setNewListTitle(event.target.value);
  };
  
  const handleCreateListClick = () => {
    const forbiddenChars = ["&", "%", "$", "@"];
    const maxLength = 80;

    if (newListTitle.trim() === "") {
      alert("Lista com nome vazio.");
    }
    
    else if (forbiddenChars.some(char => newListTitle.includes(char))) {
      alert("O nome da lista não pode conter &,%,$ ou @.");
    }
    
    else if (newListTitle.length > maxLength) {
      alert(`O nome da lista não pode ter mais de ${maxLength} caracteres.`);
    }
    
    else {
      const existingList = lists.find((list) => list.title.toLowerCase() === newListTitle.trim().toLowerCase());
      
      if (existingList) {
        alert(`A lista "${newListTitle.trim()}" já existe!`);
      }
      
      else {
        setLists([...lists, { title: newListTitle.trim() }]);
        setNewListTitle("");
      }
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

  useEffect(() => {
    handleGetLists();
  }, []);
  
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

        {lists.length !== 0 ? (
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
        ) : (
          <p>This user does not have any lists.</p>
        )}

      </div>
    </div>
  );
};

export default Movielists;
