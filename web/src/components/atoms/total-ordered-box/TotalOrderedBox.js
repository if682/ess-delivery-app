import "./TotalOrderedBox.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TotalOrderedBox({
  itemName,
  amount
}) 
{
  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={3}><img class="itemImage" src="./sample.jpg" alt="imagem do item"/></Col>
        <Col sm><div class="numberOrdered"><strong class="itemName">{itemName}</strong>{amount} unidades</div></Col>
      </Row>  
    </Container>
  );
}

export default TotalOrderedBox;