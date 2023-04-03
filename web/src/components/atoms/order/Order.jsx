import React from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import RedOutlineButton from "../red-outline-button/RedOutlineButton";

import "./Order.css";
import { ChevronRight } from "react-bootstrap-icons";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PlaceIcon from "@mui/icons-material/Place";

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