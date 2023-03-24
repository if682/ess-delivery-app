import { Button } from 'react-bootstrap';
import './Sidemenu.css'
import * as Icon from 'react-bootstrap-icons';

function Sidemenu(props) {
  return (
    <div>
      <Button className='sidemenu-item'>
        <Icon.House/><p>Início</p>
      </Button>
      <Button className='sidemenu-item'>
        <Icon.House/><p>Restaurantes</p>
      </Button>
      <Button className='sidemenu-item'>
        <Icon.House/><p>Categorias</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.House/><p>Perfil</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.House/><p>Cardápio</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.House/><p>Pedidos</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.House/><p>Avaliações</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.House/><p>Ajuda</p>
      </Button>
    </div>
  )
}

export default Sidemenu