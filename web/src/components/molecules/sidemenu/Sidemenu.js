import { Button } from "react-bootstrap";
import "./Sidemenu.css";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import logo from "../../../assets/img/logo.svg";
import Cookies from "js-cookie";

function Sidemenu(props) {
  const [logOut, setLogOut] = useState(false);
  const handleLogOut = () => {
    Cookies.remove("token");
    setLogOut(true);
  };
  return (
    <div className="sidemenu">
      <img src={logo} alt={"logo"} />
      <Button className="sidemenu-item" href="/">
        <Icon.House />
        <p>Início</p>
      </Button>
      <Button className="sidemenu-item client">
        <Icon.Shop />
        <p>Restaurantes</p>
      </Button>
      <Button className="sidemenu-item client" href="/categorias">
        <Icon.Postcard />
        <p>Categorias</p>
      </Button>
      <Button className="sidemenu-item restaurant" href="/minha-conta">
        <Icon.Person />
        <p>Perfil</p>
      </Button>
      <Button className="sidemenu-item restaurant">
        <Icon.Postcard />
        <p>Cardápio</p>
      </Button>
      <Button className="sidemenu-item restaurant">
        <Icon.ListCheck />
        <p>Pedidos</p>
      </Button>
      <Button className="sidemenu-item restaurant">
        <Icon.Star />
        <p>Avaliações</p>
      </Button>
      <Button className="sidemenu-item restaurant">
        <Icon.QuestionLg />
        <p>Ajuda</p>
      </Button>
      <Button className="sidemenu-item restaurant" onClick={handleLogOut}>
        <Icon.Backspace />
        <p>Sair</p>
      </Button>
    </div>
  );
}

export default Sidemenu;