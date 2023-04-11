import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./RestaurantTotal.css";
import TotalsTable from "../../components/molecules/restaurantTotals-table/TotalsTable";
import { useParams } from 'react-router-dom'

function OrderTotals()
{
  // passar esses parametros para TotalsTable
  const {restaurantID} = useParams();
  let restaurantName = "test";

  return (
    <div className="order-totals-page-container">
      <PageTitle>Total dos pedidos do mês de {restaurantName}</PageTitle>

      <div> </div>
    </div>
  );
}

export default OrderTotals;