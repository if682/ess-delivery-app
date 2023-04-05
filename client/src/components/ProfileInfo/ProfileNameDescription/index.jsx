import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NameDescription = () => {

  let navigate = useNavigate();

  const editButtonClick = () =>{
    alert("Clicou para alterar os dados do perfil")
    let path = `editprofile`;
    navigate(path)
  }
  
  return (
    <section className="name-description-container">
            <div className="user-name">
                <p>userName</p>
                <button className="edit-user-profile" onClick={editButtonClick}>
                  <img src="../../assets/edit-profile.svg" alt=""/>
                </button>
            </div>  

            <div className="user-description">
                <p>was it just me or yall could see the invisible man the entire movie too?</p>
            </div>
    </section>
  );
};

export default NameDescription;
