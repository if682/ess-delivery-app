import React, { useState } from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import { motion, transform } from "framer-motion";

import "./Order.css";
import RedOutlineButton from "../red-outline-button/RedOutlineButton";
import { ChevronRight } from "react-bootstrap-icons";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PlaceIcon from "@mui/icons-material/Place";

function Order({
  id,
  place,
  address,
  date,
  items,
  values,
  paymentMethod,
  selectOrder,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  const openOrderDetails = () => {
    selectOrder();
    setShowDetails(false);
  };

  return (
    <Dropdown className="order-container" onClick={toggleDetails}>
      <Dropdown.Toggle>
        <Row>
          <Col xs={2}>
            <div className="d-flex flex-column align-items-start">
              <strong>Pedido ID:</strong>
              <span>#{id}</span>
            </div>
          </Col>

          <Col xs={2}>
            <div className="d-flex flex-column align-items-start">
              <strong className="active-order-text d-flex align-items-center">
                <StorefrontIcon /> Restaurante:
              </strong>
              <span>{place}</span>
            </div>
          </Col>

          <Col xs={3}>
            <div className="d-flex flex-column align-items-start">
              <strong className="active-order-text d-flex align-items-center">
                <PlaceIcon /> Endereço:
              </strong>
              <span>{address}</span>
            </div>
          </Col>

          <Col xs={2}>
            <div className="d-flex flex-column align-items-start">
              <strong>Data:</strong>
              <span>{date}</span>
            </div>
          </Col>

          <Col xs={2}>
            <RedOutlineButton
              chevron={false}
              width="10rem"
              onClick={openOrderDetails}
            >
              Ajuda
            </RedOutlineButton>
          </Col>

          <Col xs={1}>
            <ChevronRight
              size={20}
              style={showDetails ? { transform: "rotate(90deg)" } : {}}
            />
          </Col>
        </Row>
      </Dropdown.Toggle>

      <div>
        {showDetails && (
          <motion.div
            className="order-data w-100 p-4 ps-5 pe-5"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="order-second-row d-flex flex-row align-items-center justify-content-between">
              <strong>Itens</strong>

              <strong>Valores</strong>

              <strong>Forma de pagamento</strong>
            </div>

            {items.map((item, index) => (
              <>
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
                    {index === 0 ? paymentMethod : ""}
                  </div>
                </div>
              </>
            ))}

            <hr className="justify-self-start w-50" />
            <div
              className="order-sub-row w-50 d-flex flex-row align-items-center justify-content-between"
              style={{ color: "#272727E5", fontWeight: 500 }}
            >
              <span>Subtotal</span>

              <span>
                {values.subtotal.toLocaleString("pt-br", {
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
                {values.deliveryFee.toLocaleString("pt-br", {
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
                {values.total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </Dropdown>
  );
}

export default Order;
