import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import "./ClientInfo.css";
import { DataField } from "../DataField/DataField";

function ClientInfo() {
  const [name, setName] = useState("")
  const email = Cookies.get('token')
  const [password, setPassword] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/clients')
      .then(response => response.json())
      .then(data => {
        const client = data.filter(item => item.email == email);
        setName(client[0].name)
        setPassword(client[0].password)
      })
    
}, [])

  const navigate = useNavigate();
  const goBack =  () =>{
    navigate("/minha-conta");
  }


  return (
    <div className="client-info-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
      </button>
      <div>
        <DataField fieldName="Nome" value={name} inputType="text"/>
        <DataField fieldName="E-mail" value={email} inputType="text"/>
        <DataField fieldName="Senha" value={password} inputType="password"/>
      </div>
    </div>
  );
}

export default ClientInfo;