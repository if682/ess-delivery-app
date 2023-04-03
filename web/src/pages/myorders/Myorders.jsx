import React from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./Myorders.css";

function MyOrders() {
  return (
    <div className="my-orders-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Meus pedidos</PageTitle>
    </div>
  );
}

export default MyOrders;