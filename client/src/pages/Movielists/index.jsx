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

  const handleUserListClick = ({ name }) => {
    alert(`Aqui deve ir para a página da lista ${name}`);
    let path = `/profile/movielists/movielist`;
    navigate(path);
  };

  const handleNewListTitleChange = (event) => {
    setNewListTitle(event.target.value);
  };
  
  const handleCreateListClick = async () => {
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
            setLists([...lists, { name: newListTitle.trim(), userId: userId }]);
            setNewListTitle("");
            console.log("POST realizado com sucesso.");
          } else {
            console.log("Ocorreu um erro no POST.");
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
          console.log("DELETE realizado com sucesso.");
        } else {
          console.log("Ocorreu um erro no DELETE.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };  

  useEffect(() => {
    console.log(lists);
    localStorage.setItem("userLists", JSON.stringify(lists));
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
          console.log("GET realizado com sucesso.");
        } else {
          console.log("Ocorreu um erro no GET.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleGetUsername = async () => {
      try {
        let response = await fetch(`http://localhost:${port}/profile/${userId}`, {
          method: "GET",
        });
  
        if (response.ok) {
          let data = await response.json();
          setUsername(data.user.username);
          console.log("GET realizado com sucesso.");
        } else {
          console.log("Ocorreu um erro no GET.");
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
            type="text"
            placeholder="Create a new list"
            value={newListTitle}
            onChange={handleNewListTitleChange}
          />
          <button onClick={handleCreateListClick}>Create</button>
        </div>

        {lists.length === 0 ? (<p>Loading...</p>) : (
          <ul>
            {lists.filter(list => list.name !== "Curtidos" && list.name !== "Historico").map((list) =>
                <li key={list.name} className="movielists-list-item" onClick={() => handleUserListClick(list)}>
                  <div className="list-name-container">
                    <button className="delete-list" onClick={(event) => handleDeleteListClick(event, list.name)}>Delete</button>
                    <span className="list-name">{list.name}</span>
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
