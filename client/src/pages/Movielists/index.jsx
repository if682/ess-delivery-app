import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MovielistHeader from "../../components/MovielistHeader";
import "./styles.css";

const port = 4001;

const Movielists = () => {
  const userId = localStorage.getItem("userId");
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Vai pra página da lista escolhida
  const handleUserListClick = (listName) => {
    console.log("A lista foi acessada.");
    let path = `${listName}`;
    navigate(path);
  };  

  const handleNewListTitleChange = (event) => {
    setNewListTitle(event.target.value);
  };
  
  const handleCreateListClick = async () => {
    const forbiddenChars = ["&", "%", "$", "@"];
    const maxLength = 80;

    if (newListTitle.trim() === "") {
      console.log("Lista com nome vazio.");
      alert("Lista com nome vazio.");
    }
    
    else if (forbiddenChars.some(char => newListTitle.includes(char))) {
      console.log("O nome da lista não pode conter &,%,$ ou @.");
      alert("O nome da lista não pode conter &,%,$ ou @.");
    }
    
    else if (newListTitle.length > maxLength) {
      console.log(`O nome da lista não pode ter mais de ${maxLength} caracteres.`);
      alert(`O nome da lista não pode ter mais de ${maxLength} caracteres.`);
    }
    
    else {
      const existingList = lists.find((list) => list.name.toLowerCase() === newListTitle.trim().toLowerCase());
      
      if (existingList) {
        alert(`A lista "${newListTitle.trim()}" já existe!`);
      }
      
      else {
        // faz uma requisição POST para a API para criar uma nova lista
        try {
          let response = await fetch(`http://localhost:${port}/list/${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: userId,
              name: newListTitle.trim(),
            }),
          });

          if (response.ok) {
            const newList = [...lists, { name: newListTitle.trim(), userId: userId }];
            setLists(newList);
            localStorage.setItem("userLists", JSON.stringify(newList)); // atualiza o localStorage
            setNewListTitle("");
            console.log("A lista foi criada.");
          } else {
            console.log("A lista não foi criada.");
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleDeleteListClick = async (event, name) => {
    // impede que o evento de clique na lista seja disparado
    event.stopPropagation();
    
    // exibe uma janela de diálogo perguntando ao usuário se ele realmente deseja excluir a lista
    const userConfirmation = window.confirm(`Tem certeza que deseja excluir a lista "${name}"?`);
    
    if (userConfirmation) {
      try {
        let response = await fetch(`http://localhost:${port}/list/${userId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: userId,
            listName: name.trim(),
          }),
        });
  
        if (response.ok) {
          const newList = lists.filter((list) => list.name !== name);
          setLists(newList);
          localStorage.setItem("userLists", JSON.stringify(newList)); // atualiza o localStorage
          console.log("A lista foi deletada.");
        } else {
          console.log("A lista não foi deletada.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };  

  useEffect(() => {
    // atualiza a lista na interface sempre que o estado de listas for atualizado
  }, [lists]);

  useEffect(() => {
    // faz uma requisição GET para a API para obter as listas do usuário
    const handleGetLists = async () => {
      try {
        let response = await fetch(`http://localhost:${port}/list/${userId}`, {
          method: "GET",
        });
  
        if (response.ok) {
          let data = await response.json();
          setLists(Object.values(data).flat());
          console.log("As listas foram carregadas.");
        } else {
          console.log("As listas não foram carregadas.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    // faz uma requisição GET para a API para obter o nome do usuário
    const handleGetUsername = async () => {
      try {
        let response = await fetch(`http://localhost:${port}/profile/${userId}`, {
          method: "GET",
        });
  
        if (response.ok) {
          let data = await response.json();
          setUsername(data.user.username);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetUsername();
    handleGetLists();
  }, []);  
  
  return (
    <div className="movielists-page">
      <Header />
      <MovielistHeader userAvatar="../../assets/avatar-default.png" username={username} listName="Lists" />
      
      <div className="movielists-list">
        <div className="movielists-new-list">
          <input
            data-testid="createListField"
            type="text"
            placeholder="Create a new list"
            value={newListTitle}
            onChange={handleNewListTitleChange}
          />
          <button data-testid="createListButton" onClick={handleCreateListClick}>Create</button>
        </div>
  
        {lists.length === 0 ? (<p>Loading...</p>) : (
          <ul>
            {lists.filter(list => list.name !== "Curtidos" && list.name !== "Historico").map((list) =>
                <li key={list.name} className="movielists-list-item" onClick={() => handleUserListClick(list.name)}>
                  <div className="list-name-container">
                    <button data-testid="deleteListButton" className="delete-list" onClick={(event) => handleDeleteListClick(event, list.name)} >Delete</button>
                    <span data-testid="listName" className="list-name">{list.name}</span>
                  </div>
                </li>
              )
            }
          </ul>
        )}
  
        {/*Usuário só tem as listas Curtidos e Historico*/}
        {lists.length === 2 && <p>This user does not have any lists.</p>}
  
      </div>
    </div>
  );  
};

export default Movielists;
