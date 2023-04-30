import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./OrderTotals.css";
import RestaurantTotalAccordion from "../../components/molecules/restaurantTotals-accordion/RestaurantTotalAccordion";
import TotalsTable from "../../components/molecules/restaurantTotals-table/TotalsTable";

function OrderTotals() {

  return (
    <div className="order-totals-page-container">
      <PageTitle>Total dos pedidos do mês</PageTitle>

      <div> <TotalsTable/> </div>
    </div>
  );
}

export default OrderTotals;