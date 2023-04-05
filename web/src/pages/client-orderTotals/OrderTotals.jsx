import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./OrderTotals.css";

function OrderTotals() {

  return (
    <div className="my-orders-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Total dos pedidos do mês</PageTitle>

      <div> Add totals table here </div>
    </div>
  );
}

export default OrderTotals;