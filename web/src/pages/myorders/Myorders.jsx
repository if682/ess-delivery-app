/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./Myorders.css";
import OrdersTable from "../../components/molecules/orders-table/OrdersTable";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const data = await loadOrders();
      setOrders(data);
    })();
  }, []);

  async function loadOrders() {
    const response = await fetch(`${process.env.PUBLIC_URL}/orders.json`);
    const data = await response.json();
    return data;
  }

  return (
    <div className="my-orders-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Minha conta</PageTitle>

      <OrdersTable orders={orders} />
    </div>
  );
}

export default MyOrders;
