import { Button } from "react-bootstrap";
import "./Sidemenu.css";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import logo from "../../../assets/img/logo.svg";
import Cookies from "js-cookie";

export function Sidemenu(props) {
  const [logOut, setLogOut] = useState(false);
  const handleLogOut = () => {
    Cookies.remove("token");
    setLogOut(true);
  };
  return (
    <div className="sidemenu">
      <img src={logo} alt={"logo"}  data-testid="logo-nav" />
      <Button className="sidemenu-item" data-testid="inicio-nav" href="/">
        <Icon.House />
        <p>Início</p>
      </Button>
      <Button className="sidemenu-item client" data-testid="restaurantes-nav" href="/restaurantes">
        <Icon.Shop />
        <p>Restaurantes</p>
      </Button>
      <Button className="sidemenu-item restaurant" data-testid="perfil-nav" href="/minha-conta">
        <Icon.Person />
        <p>Perfil</p>
      </Button>
      <Button className="sidemenu-item restaurant" data-testid="cardapio-nav" href="/cardapio">
        <Icon.Postcard />
        <p>Cardápio</p>
      </Button>
      <Button className="sidemenu-item restaurant" data-testid="pedidos-nav" href="/pedidos">
        <Icon.ListCheck />
        <p>Pedidos</p>
      </Button>
      <Button className="sidemenu-item restaurant" data-testid="avaliacoes-nav" href="/avaliacoes">
        <Icon.Star />
        <p>Avaliações</p>
      </Button>
      <Button className="sidemenu-item restaurant" data-testid="ajuda-nav" href="/ajuda">
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