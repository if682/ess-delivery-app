import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./OrdersTable.css";
import Order from "../../atoms/order/Order";
import { Row } from "react-bootstrap";

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
        <>
          <div>
            <strong>Pedido</strong>#{selectedOrder.id}
          </div>
        </>
      ) : (
        <>
          <h2>Histórico de pedidos</h2>

          {orders.map((order) => (
            <Order {...order} selectOrder={() => setSelectedOrder(order)} />
          ))}
        </>
      )}
    </div>
  );
}

export default OrdersTable;