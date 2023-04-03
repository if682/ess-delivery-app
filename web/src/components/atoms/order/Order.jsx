import React from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import RedOutlineButton from "../red-outline-button/RedOutlineButton";

import "./Order.css";
import { ChevronRight } from "react-bootstrap-icons";

function Order({
  id,
  place,
  address,
  date,
  itens,
  values,
  paymentMethod,
  selectOrder,
}) {
  return (
    <Dropdown className="order-container">
      <Dropdown.Toggle>
        <Row>
          <Col xs={2}>
            <div className="d-flex flex-column align-items-center">
              <strong>Pedido ID:</strong>
              <span>#{id}</span>
            </div>
          </Col>

          <Col xs={2}>
            <div className="d-flex flex-column align-items-center">
              <strong className="active-order-text">Restaurante:</strong>
              <span>{place}</span>
            </div>
          </Col>

          <Col xs={3}>
            <div className="d-flex flex-column align-items-center">
              <strong className="active-order-text">Endereço:</strong>
              <span>{address}</span>
            </div>
          </Col>

          <Col xs={2}>
            <div className="d-flex flex-column align-items-center">
              <strong>Data:</strong>
              <span>{date}</span>
            </div>
          </Col>

          <Col xs={2}>
            <RedOutlineButton
              chevron={false}
              width="10rem"
              onClick={selectOrder}
            >
              Ajuda
            </RedOutlineButton>
          </Col>

          <Col xs={1}>
            <ChevronRight size={20} />
          </Col>
        </Row>
      </Dropdown.Toggle>
    </Dropdown>
  );
}

export default Order;