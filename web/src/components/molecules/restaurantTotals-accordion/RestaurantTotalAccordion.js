import "./RestaurantTotalAccordion.css";
import RedOutlineButton from "../../atoms/red-outline-button/RedOutlineButton";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


function findAndCountMostOrdered(orders) {
  let allItems = orders.reduce((items,order) => {return items.concat(order.items)}, []);
  let allSummed = []

  // soma items entre pedidos
  allItems.reduce((res, item) => {
    if (!res[item.name]) {
      res[item.name] = { name: item.name, quantity: 0 };
      allSummed.push(res[item.name])
    }
    res[item.name].quantity += item.quantity;
    return res;
  }, {});

  let mostOrdered = allSummed.reduce((max, item) => max.quantity > item.quantity ? max : item);

  return [mostOrdered.name, mostOrdered.quantity];
}

function RestaurantTotalAccordion({
  place,
  orders
}) 
{
  const restTotalsLink = "http://localhost:3000/total-pedidos/restaurante/" + place;

  // calcular a soma
  const orderSum = orders.reduce((total, order) => {return total + order.values.total}, 0);
  // encontra o item mais pedido entre os pedidos recebidos
  const [mostOrdered, quantity] = findAndCountMostOrdered(orders);

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
              <Col sm><div class="mostDescription">Mais pedido:<br/><strong class="mostOrdered">{mostOrdered}<br/></strong>{quantity} unidades</div></Col>
              <Col sm={3}>
                <a href={restTotalsLink}>
                  <strong class = "mostOrdered">Ver todos</strong>
                </a> 
              </Col>
            </Row>  
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RestaurantTotalAccordion;