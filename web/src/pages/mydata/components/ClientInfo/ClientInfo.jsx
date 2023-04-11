import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import "./ClientInfo.css";
import { DataField } from "../../../../components/atoms/data-field/DataField";
import { EditEmailPopup } from "../EditEmail/EditEmailPopup";
import { EditPasswordPopup } from "../EditPassword/EditPasswordPopup";
import { EditNamePopup } from "../EditName/EditNamePopup";

function ClientInfo() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [currentClients, setCurrentClients] = useState([])
  const email = Cookies.get('token')
  const [password, setPassword] = useState("")
  const [showEditEmail, setShowEditEmail] = useState(false)
  const [showEditPassword, setShowEditPassword] = useState(false)
  const [showEditName, setShowEditName] = useState(false)

  //para cada mudança nos valores de email, nome e senha
  //define um valor para currentClients a partir dos dados dos clientes da db
  //a partir desse valor e do e-mail dado pelo token do usuário resgata os outros dados de cadastro:
  //id, nome e senha
  useEffect(() => {
    fetch('http://localhost:3001/clients')
      .then(response => response.json())
      .then(data => {
        const client = data.filter(item => item.email == email);
        setName(client[0].name)
        setPassword(client[0].password)
        setId(client[0].id)
        setCurrentClients(data)
      })
}, [email, name, password])

  const navigate = useNavigate();

  //volta para a página minha conta
  const goBack =  () =>{
    navigate("/minha-conta");
  }


  return (
    <>
    <EditEmailPopup show={showEditEmail} onHide={() => setShowEditEmail(false)} client_id={id} currentClients={currentClients} name={name} password={password}/>
    <EditPasswordPopup show={showEditPassword} onHide={() => setShowEditPassword(false)} client_id={id} name={name} email={email} currentPassword={password}/>
    <EditNamePopup show={showEditName} onHide={() => setShowEditName(false)} client_id={id} password={password} email={email}/>
    <div className="client-info-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
      </button>
      <div>
        <DataField fieldName="Nome" value={name} inputType="text" setShow={setShowEditName} placeholder="Nome" testid="nome"/>
        <DataField fieldName="E-mail" value={email} inputType="text" setShow={setShowEditEmail} placeholder="E-mail" testid="email"/>
        <DataField fieldName="Senha" value={password} inputType="password" setShow={setShowEditPassword} placeholder="Senha" testid="senha"/>
      </div>
    </div>
    </>
  );
}

export default ClientInfo;