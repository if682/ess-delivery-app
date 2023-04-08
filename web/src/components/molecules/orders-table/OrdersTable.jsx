import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

import "./OrdersTable.css";
import Order from "../../atoms/order/Order";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PlaceIcon from "@mui/icons-material/Place";
import RedOutlineButton from "../../atoms/red-outline-button/RedOutlineButton";

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
          <div className="order-identifier">
            <strong>Pedido</strong>#{selectedOrder.id}
          </div>

          <div className="order-data w-100 p-4 ps-5 pe-5">
            <div className="order-first-row d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-start">
                <strong className="active-order-text d-flex align-items-center">
                  <StorefrontIcon /> Restaurante:
                </strong>
                <span>{selectedOrder.place}</span>
              </div>

              <div className="d-flex flex-column align-items-start">
                <strong className="active-order-text d-flex align-items-center">
                  <PlaceIcon /> Endereço:
                </strong>
                <span>{selectedOrder.address}</span>
              </div>

              <div className="d-flex flex-column align-items-start">
                <strong className="d-flex align-items-center">Data:</strong>
                <span>{selectedOrder.date}</span>
              </div>
            </div>

            <div className="order-second-row d-flex flex-row align-items-center justify-content-between mt-4">
              <strong>Itens</strong>

              <strong>Valores</strong>

              <strong>Forma de pagamento</strong>
            </div>

            {selectedOrder.itens.map((item, index) => (
              <div className="order-row d-flex flex-row align-items-center justify-content-between mt-2">
                <div
                  className="d-flex align-items-end"
                  style={{ width: "25%" }}
                >
                  <span className="active-order-text">{item.quantity}x</span>
                  {item.name}
                </div>

                <div>
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>

                <div
                  style={{
                    width: "38%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {index === 0 ? selectedOrder.paymentMethod : ""}
                </div>
              </div>
            ))}

            <hr className="justify-self-start w-50" />
            <div
              className="order-sub-row w-50 d-flex flex-row align-items-center justify-content-between"
              style={{ color: "#272727E5", fontWeight: 500 }}
            >
              <span>Subtotal</span>

              <span>
                {selectedOrder.values.subtotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div
              className="order-sub-row w-50 d-flex flex-row align-items-center justify-content-between mt-1"
              style={{ color: "#27272782", fontWeight: 400 }}
            >
              <span>Taxa de entrega</span>

              <span>
                {selectedOrder.values.deliveryFee.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div
              className="order-sub-row w-50 d-flex flex-row align-items-center justify-content-between mt-1"
              style={{ color: "#272727E5", fontWeight: 700 }}
            >
              <span>Total</span>

              <span>
                {selectedOrder.values.total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>

          <div className="order-buttons d-flex flex-row align-items-center justify-content-evenly w-100">
            <RedOutlineButton chevron={false} width="45%">
              Ajuda com o pedido
            </RedOutlineButton>
            <RedOutlineButton chevron={false} width="45%">
              Ajuda com a entrega
            </RedOutlineButton>
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