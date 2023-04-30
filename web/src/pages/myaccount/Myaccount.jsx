import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import RedButton from "../../components/atoms/red-button/RedButton";
import RedOutlineButton from "../../components/atoms/red-outline-button/RedOutlineButton";
import { DeactivateAccountPopup } from "./deactivate-account-popup/DeactivateAccountPopup";

import "./Myaccount.css";

function MyAccountPage() {
  const navigate = useNavigate();
  const goToMyOrders = () => navigate("/meus-pedidos");
  const goToTotalOrders = () => navigate("/total-pedidos");
  const goToMyData = () => navigate("/meus-dados")
  const[showPopup, setShowPopup] = useState(false)

  const handleClick = () =>{
    setShowPopup(!showPopup)
  }

  return (
    <div className="my-account-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <DeactivateAccountPopup show={showPopup} onHide={() => setShowPopup(false)}/>
      <PageTitle>Minha conta</PageTitle>

      <RedOutlineButton onClick={goToMyData}>Meus dados</RedOutlineButton>
      <RedOutlineButton onClick={goToMyOrders}>Meus pedidos</RedOutlineButton>
      <RedOutlineButton onClick={goToTotalOrders}>Total dos pedidos do mês</RedOutlineButton>

      <RedButton onClick={handleClick}>Desativar conta</RedButton>
    </div>
  );
}

export default MyAccountPage;