import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./OrdersTable.css";
import Order from "../../atoms/order/Order";
import OrderDetails from "../order-details/OrderDetails";
import { Input } from "@mui/material";

function OrdersTable({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filteredOrders, setOrders] = useState(orders);

  const [filter, setFilter] = useState({ name: "", address: "" });

  useEffect(() => {
    setOrders(orders);
  }, [orders]);

  const navigate = useNavigate();
  const goBack = selectedOrder
    ? () => setSelectedOrder(null)
    : () => navigate("/minha-conta");

  const filterOrders = () => {
    const filtered = orders.filter((order) => {
      const name = order.place.toLowerCase();
      const address = order.address.toLowerCase();

      return (
        name.toLowerCase().includes(filter.name.toLowerCase()) &&
        address.toLowerCase().includes(filter.address.toLowerCase())
      );
    });

    setOrders(filtered);

    if (filter === { name: "", address: "" }) setOrders(orders);
  };

  useEffect(() => {
    filterOrders();
  }, [filter]);

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

          <div className="filters mb-3 d-flex align-items-center justify-content-start w-100 ps-3">
            <strong className="me-2">Filtrar por:</strong>

            <Input
              placeholder="Nome do restaurante"
              value={filter.name}
              onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            />

            <Input
              style={{ marginLeft: "1rem" }}
              placeholder="Endereço de entrega"
              value={filter.address}
              onChange={(e) =>
                setFilter({ ...filter, address: e.target.value })
              }
            />
          </div>

          <div className="orders">
            {filteredOrders.map((order, i) => (
              <Order
                {...order}
                selectOrder={() => {setSelectedOrder(order)}}
                key={i}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default OrdersTable;
