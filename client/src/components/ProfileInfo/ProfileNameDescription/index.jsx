import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginContext } from "../../../Context/LoginContext"
import { useContext } from "react";

const port = 4001;

const NameDescription = () => {
  const [context, setContext] = useContext(LoginContext)
  const userId = context.userId
  const [userData, setUserData] = useState("");

  let navigate = useNavigate();

  const editButtonClick = () =>{
    let path = `editprofile`;
    navigate(path)
  }
  
  useEffect(() => {
    // pega o nome do usuário logado
    const handleGetUserData = async () => {
      try {
        let response = await fetch(`http://localhost:${port}/profile/${userId}`, {
          method: "GET",
        });
  
        if (response.ok) {
          let data = await response.json();
          setUserData(data.user);
          console.log("GET realizado com sucesso.");
        } else {
          console.log("Ocorreu um erro no GET.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetUserData();
  }, []);

  return (
    <section className="name-description-container">
            <div className="user-name">
                <p>{userData.username}</p>
                <button className="edit-user-profile" onClick={editButtonClick}>
                  <img src="../../assets/edit-profile.svg" alt=""/>
                </button>
            </div>  

            <div className="user-description">
                <p>{userData.description}</p>
            </div>
    </section>
  );
};

export default NameDescription;
