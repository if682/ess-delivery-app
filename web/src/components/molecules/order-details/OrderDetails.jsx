import { useState } from "react";
import { Modal } from "react-bootstrap";

import StorefrontIcon from "@mui/icons-material/Storefront";
import PlaceIcon from "@mui/icons-material/Place";
import RedOutlineButton from "../../atoms/red-outline-button/RedOutlineButton";

function OrderDetails({ order }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="orders" style={{ maxHeight: "60vh" }}>
        <div className="order-identifier">
          <strong>Pedido</strong>#{order.id}
        </div>

        <div className="order-data w-100 p-4 ps-5 pe-5">
          <div className="order-first-row d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-start">
              <strong className="active-order-text d-flex align-items-center">
                <StorefrontIcon /> Restaurante:
              </strong>
              <span>{order.place}</span>
            </div>

            <div className="d-flex flex-column align-items-start">
              <strong className="active-order-text d-flex align-items-center">
                <PlaceIcon /> Endereço:
              </strong>
              <span>{order.address}</span>
            </div>

            <div className="d-flex flex-column align-items-start">
              <strong className="d-flex align-items-center">Data:</strong>
              <span>{order.date}</span>
            </div>
          </div>

          <div className="order-second-row d-flex flex-row align-items-center justify-content-between mt-4">
            <strong>Itens</strong>

            <strong>Valores</strong>

            <strong>Forma de pagamento</strong>
          </div>

          {order.itens.map((item, index) => (
            <div className="order-row d-flex flex-row align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-end" style={{ width: "25%" }}>
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
                {index === 0 ? order.paymentMethod : ""}
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
              {order.values.subtotal.toLocaleString("pt-br", {
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
              {order.values.deliveryFee.toLocaleString("pt-br", {
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
              {order.values.total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>

        <div className="order-buttons d-flex flex-row align-items-center justify-content-evenly w-100">
          <RedOutlineButton
            chevron={false}
            width="45%"
            onClick={() => setShowModal(true)}
          >
            Ajuda com o pedido
          </RedOutlineButton>
          <RedOutlineButton
            chevron={false}
            width="45%"
            onClick={() => setShowModal(true)}
          >
            Ajuda com a entrega
          </RedOutlineButton>
        </div>
      </div>

      {showModal && <Modal>oi</Modal>}
    </>
  );
}

export default OrderDetails;