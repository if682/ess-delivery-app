import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./TotalsTable.css";
import RestaurantTotalAccordion from "../restaurantTotals-accordion/RestaurantTotalAccordion";
import Order from "../../atoms/order/Order";
import { Row } from "react-bootstrap";

function TotalsTable() {
  const navigate = useNavigate();
  const goBack = () => navigate("/minha-conta");
  const orders = [];
  let currentOrders = [];

  let currentDate = new Date();
  let currentMonth = 1; //currentDate.getMonth()
  let currentYear = 2021; //currentDate.getFullYear()
  let monthYearString = currentMonth + '/' + currentYear;

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(response => response.json())
      .then(data => {
        orders.push(JSON.parse(data)[0])});
  }, []);
  
  currentOrders = orders.filter(order => order.date.substring(2) === monthYearString);

  const uniqueRestaurants = [...new Set(currentOrders.map((order) => order.place))];
  const orderTotals = [];

  for(let restaurant of uniqueRestaurants) {
    let restaurantTotals;
    
    let totalSpent = 0;
    currentOrders.filter(order => order.place === restaurant).map(order => totalSpent += order.values.total);

    // ainda falta o item mais pedido
    restaurantTotals.name = restaurant;
    restaurantTotals.totalSpent = totalSpent;

    orderTotals.push(restaurantTotals);
  }

  return (
    <div className="totals-table-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
      </button>
      
      <div class="accordionTable">{orderTotals.map(RestaurantTotalAccordion)}</div>
    </div>
  );
}

export default TotalsTable;