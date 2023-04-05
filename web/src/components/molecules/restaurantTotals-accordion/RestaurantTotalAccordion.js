import 'bootstrap/dist/css/bootstrap.min.css';
import "./RestaurantTotalAccordion.css";
import Accordion from 'react-bootstrap/Accordion';

function RestaurantTotalAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
		  <strong class="totalAccordionHeader">Restaurant1</strong> <div class="totalAccordionHeader">TotalOrdered: <strong> R$10,00</strong></div>
		</Accordion.Header>
        <Accordion.Body>
          MostOrderedImage, MostOrderedName, SeeMoreButton (?)
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RestaurantTotalAccordion;