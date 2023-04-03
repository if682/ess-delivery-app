import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import "./Myorders.css";
import OrdersTable from "../../components/molecules/orders-table/OrdersTable";

function MyOrders() {
  const orders = [
    {
      id: "098123",
      place: "McDonald's",
      address: "Rua dos Bobos, 0",
      date: "01/01/2021",
      itens: [
        {
          name: "Big Mac",
          quantity: 1,
          price: 10.0,
        },
        {
          name: "Coca-Cola",
          quantity: 1,
          price: 5.0,
        },
      ],
      values: {
        subtotal: 15.0,
        deliveryFee: 5.0,
        total: 20.0,
      },
      paymentMethod: "Cartão de crédito",
    },
    {
      id: "098124",
      place: "Burger King",
      address: "Rua dos Bobos, 0",
      date: "01/01/2021",
      itens: [
        {
          name: "Whopper",
          quantity: 1,
          price: 10.0,
        },
        {
          name: "Coca-Cola",
          quantity: 1,
          price: 5.0,
        },
      ],
      values: {
        subtotal: 15.0,
        deliveryFee: 5.0,
        total: 20.0,
      },
      paymentMethod: "Pix",
    },
  ];

  return (
    <div className="my-orders-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Meus pedidos</PageTitle>

      <OrdersTable orders={orders} />
    </div>
  );
}

export default MyOrders;