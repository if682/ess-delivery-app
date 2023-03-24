import { Button } from 'react-bootstrap';
import './Sidemenu.css'
import * as Icon from 'react-bootstrap-icons';
import logo from '../../../assets/img/logo.svg'

function Sidemenu(props) {
  return (
    <div className='sidemenu'>
      <img src={logo} alt={"logo"}/> 
      <Button className='sidemenu-item'>
        <Icon.House/><p>Início</p>
      </Button>
      <Button className='sidemenu-item client'>
        <Icon.Shop/><p>Restaurantes</p>
      </Button>
      <Button className='sidemenu-item client'>
        <Icon.Postcard/><p>Categorias</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.Person/><p>Perfil</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.Postcard/><p>Cardápio</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.ListCheck/><p>Pedidos</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.Star/><p>Avaliações</p>
      </Button>
      <Button className='sidemenu-item restaurant'>
        <Icon.QuestionLg/><p>Ajuda</p>
      </Button>
    </div>
  )
}

export default Sidemenu