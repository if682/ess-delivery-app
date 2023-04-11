import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import _ from "lodash";

import "./TotalsTable.css";
import RestaurantTotalAccordion from "../restaurantTotals-accordion/RestaurantTotalAccordion";

// Converte para YYYY-MM, que é o formato do input month de HTML
const convertToMonthFormat = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB').split('/').reverse().join('-').substring(0,7)
}

function TotalsTable() {
  const navigate = useNavigate();
  const goBack = () => navigate("/total-pedidos");

  const [filterDate, setFilterDate] = useState(convertToMonthFormat(new Date()));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const data = await loadOrders();
      setOrders(data);
    })();
  }, []);

  async function loadOrders() {
    const response = await fetch("http://localhost:3001/orders");
    const data = await response.json();
    let userOrders = data['2'];
    return userOrders;
  }

  return (
    <div className="totals-table-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
        <input
          type="month"
          class="month-input"
          value={filterDate}
          onChange={(e) => {setFilterDate(e.target.value)}}
        />
      </button>
      
      <div class="accordionTable">
      {_(orders)
        .filter((order) => (order.date.substring(0,7) === filterDate))
        .groupBy("place")
        .map((value, key) => ({place: key, orders: value}))
        .value()
        .map(RestaurantTotalAccordion)} </div>
    </div>
  );
}

export default TotalsTable;