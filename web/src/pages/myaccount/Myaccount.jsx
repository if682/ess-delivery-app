import React from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "../../components/atoms/red-button/RedButton";
import RedOutlineButton from "../../components/atoms/red-outline-button/RedOutlineButton";

import "./Myaccount.css";

function MyAccountPage() {
  const navigate = useNavigate();
  const goToMyOrders = () => navigate("/meus-pedidos");

  return (
    <div className="my-account-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <strong>Minha conta</strong>

      <RedOutlineButton>Meus dados</RedOutlineButton>
      <RedOutlineButton onClick={goToMyOrders}>Meus pedidos</RedOutlineButton>

      <RedButton>Desativar conta</RedButton>
    </div>
  );
}

export default MyAccountPage;