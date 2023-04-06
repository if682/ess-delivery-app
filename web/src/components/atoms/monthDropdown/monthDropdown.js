import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Depende da importação de pedidos para gerar datas
function createMonthYear() {
  let monthYearArray = [];
  //pedidos = getPedidos
  
  /*
  pedidos.forEach(pedido => {
    monthYear = pedido.Date.substring(3);

    if (!monthYearArray.includes(monthYear)) {
        monthYearArray.push(monthYear);
    }
  });
  */

  return monthYearArray;
}

function monthDropdown() {
  let dropDownItemsArray = createMonthYear();

  return (
    <DropdownButton title="Selecione o mês">
      {dropDownItemsArray.map(monthYear => (
       <Dropdown.Item>{monthYear}</Dropdown.Item>
     ))}
    </DropdownButton>
  );
}

export default monthDropdown;