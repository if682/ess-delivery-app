import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import "./Myaccount.css";

function MyAccountPage() {
  const navigate = useNavigate();
  const GoToMyOrders = () => navigate("/meus-pedidos");

  return (
    <div className="my-account-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <strong>Minha conta</strong>

      <button className="red-outline-button">
        Meus dados
        <span>
          <ChevronRight size={20} />
        </span>
      </button>

      <button className="red-outline-button" onClick={GoToMyOrders}>
        Meus pedidos
        <span>
          <ChevronRight size={20} />
        </span>
      </button>

      <button className="red-button">Desativar conta</button>
    </div>
  );
}

export default MyAccountPage;