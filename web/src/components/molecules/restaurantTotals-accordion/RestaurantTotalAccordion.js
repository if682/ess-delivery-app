import 'bootstrap/dist/css/bootstrap.min.css';
import "./RestaurantTotalAccordion.css";
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
            <Row>
              <Col sm><strong class="restaurantName">Restaurant1</strong></Col>
              <Col sm><div>TotalOrdered:<strong class="totalOrdered"> R$10,00</strong>
              </div></Col>
            </Row>  
          </Container>
		    </Accordion.Header>
        <Accordion.Body>
          <img class="itemImage" src="./sample.jpg" alt="Item mais pedido"/>  MostOrderedName, SeeMoreButton (?)
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RestaurantTotalAccordion;