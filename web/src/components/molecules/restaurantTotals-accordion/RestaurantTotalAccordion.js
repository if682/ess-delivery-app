import "./RestaurantTotalAccordion.css";
import RedOutlineButton from "../../atoms/red-outline-button/RedOutlineButton";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

/*
function findAndCountMostOrdered(orders) {
  let mostOrdered = ""

  for(let )

}
*/

function RestaurantTotalAccordion({
  place,
  orders
}) 
{
  /*
  const navigate = useNavigate();
  const seeRestaurantTotals = () => navigate("/total-pedidos/" + place);
  */

  // calcular a soma
  const orderSum = orders.reduce((total, order) => {return total + order.values.total}, 0);
  //const [mostOrdered, quantity] = ;

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container>
            <Row className="align-items-center">
              <Col sm={3}><img class="restImage" src="./sample.jpg" alt="Logo do Restaurante"/></Col>
              <Col sm><strong class="restaurantName">{place}</strong></Col>
              <Col sm><div>Total:<strong class="totalSpent"> R${orderSum}</strong></div></Col>
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
                  onClick={"seeRestaurantTotals"}
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