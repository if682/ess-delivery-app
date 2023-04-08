import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./OrderTotals.css";
import RestaurantTotalAccordion from "../../components/molecules/restaurantTotals-accordion/RestaurantTotalAccordion";
import TotalsTable from "../../components/molecules/restaurantTotals-table/TotalsTable";

function OrderTotals(
  restaurantID,
  restaurantName,
  itemsOrdered
)
{

  const navigate = useNavigate();
  const goBack = () => navigate("/total-pedidos")

  return (
    <div className="order-totals-page-container">
      <PageTitle>Total dos pedidos do mês de {restaurantName}</PageTitle>

      <div> </div>
    </div>
  );
}

export default OrderTotals;