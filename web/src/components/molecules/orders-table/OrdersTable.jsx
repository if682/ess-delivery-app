import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./OrdersTable.css";
import Order from "../../atoms/order/Order";
import OrderDetails from "../order-details/OrderDetails";

function OrdersTable({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = useNavigate();
  const goBack = selectedOrder
    ? () => setSelectedOrder(null)
    : () => navigate("/minha-conta");

  return (
    <div className="orders-table-container">
      <button className="go-back-btn" onClick={goBack}>
        <ChevronLeft /> Voltar
      </button>

      {selectedOrder ? (
        <OrderDetails order={selectedOrder} />
      ) : (
        <>
          <h2>Histórico de pedidos</h2>

          <div className="orders">
            {orders.map((order) => (
              <Order {...order} selectOrder={() => setSelectedOrder(order)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default OrdersTable;