import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import _ from "lodash";

import "./TotalsTable.css";
import RestaurantTotalAccordion from "../restaurantTotals-accordion/RestaurantTotalAccordion";
import Order from "../../atoms/order/Order";
import { Row } from "react-bootstrap";

function TotalsTable() {
  const navigate = useNavigate();
  const goBack = () => navigate("/total-pedidos");

  const [orders, setOrders] = useState([]);
  const [filterDate, setFilterDate] = useState(new Date());
  

  useEffect(() => {
    (async function fetchData() {
      const data = await loadOrders();
      setOrders(data);
    })();
  }, []);

  async function loadOrders() {
    const response = await fetch(`${process.env.PUBLIC_URL}/db.json`);
    const data = await response.json();
    let userOrders = data?.orders["2"];
    return userOrders;
  }

  return (
    <div className="totals-table-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
        <input
          type="month"
          id="date-input"
          value={filterDate}
          onChange={(event) => setFilterDate(event.target.value)}
        />
      </button>
      
      <div class="accordionTable">
      {_(orders
        .filter(
          (order) =>
            (new Date(order.date).getMonth().toString() + new Date(order.date).getYear().toString())
             === (new Date(filterDate).getMonth().toString() + new Date(filterDate).getYear().toString())
        ))
        .groupBy("place")
        .map((value, key) => ({place: key, orders: value}))
        .value()
        .map(RestaurantTotalAccordion)} </div>
    </div>
  );
}

// {orderTotals.map(RestaurantTotalAccordion)}
export default TotalsTable;