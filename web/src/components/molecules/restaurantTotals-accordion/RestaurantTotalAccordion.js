import 'bootstrap/dist/css/bootstrap.min.css';
import "./RestaurantTotalAccordion.css";
import RedOutlineButton from "../../atoms/red-outline-button/RedOutlineButton";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RestaurantTotalAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container>
            <Row className="align-items-center">
              <Col sm={3}><img class="restImage" src="./sample.jpg" alt="Logo do Restaurante"/></Col>
              <Col sm><strong class="restaurantName">Restaurant1</strong></Col>
              <Col sm><div>Total:<strong class="totalOrdered"> R$10,00</strong></div></Col>
            </Row>  
          </Container>
		    </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row className="align-items-center">
              <Col sm={3}><img class="itemImage" src="./sample.jpg" alt="Item mais pedido"/></Col>
              <Col sm><div class="mostDescription">Mais pedido:<br/><strong class="mostOrdered">BigMac<br/></strong>5 unidades</div></Col>
              <Col sm={3}>
                <RedOutlineButton
                  chevron={false}
                  width="10rem">
                  Ver todos
                </RedOutlineButton>
              </Col>
            </Row>  
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RestaurantTotalAccordion;