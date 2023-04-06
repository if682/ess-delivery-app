import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./OrderTotals.css";
import RestaurantTotalAccordion from "../../components/molecules/restaurantTotals-accordion/RestaurantTotalAccordion";

function OrderTotals() {

  return (
    <div className="my-orders-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Total dos pedidos do mês</PageTitle>

      <div> <RestaurantTotalAccordion/> </div>
    </div>
  );
}

export default OrderTotals;