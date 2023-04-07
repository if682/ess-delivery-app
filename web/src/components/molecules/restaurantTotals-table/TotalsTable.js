import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./TotalsTable.css";
import RestaurantTotalAccordion from "../restaurantTotals-accordion/RestaurantTotalAccordion";
import Order from "../../atoms/order/Order";
import { Row } from "react-bootstrap";

function TotalsTable({ orders }) {
  const navigate = useNavigate();
  const goBack = () => navigate("/minha-conta");

  return (
    <div className="totals-table-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
      </button>
      
      <div class="accordionTable"><RestaurantTotalAccordion/><br/><RestaurantTotalAccordion/><br/><RestaurantTotalAccordion/><br/><RestaurantTotalAccordion/></div>
    </div>
  );
}

export default TotalsTable;