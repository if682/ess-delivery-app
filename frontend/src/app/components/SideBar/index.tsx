import { IconUserCircle, IconClose } from "../../assets/icons";
import "./index.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <span className="iconClose">{IconClose}</span>
      <span className="iconUserCircle">{IconUserCircle}</span>
      <button className="sideBar_Option_Button">Gerenciar reservas</button>
      <button className="sideBar_Option_Button">Minhas reservas</button>
      <button className="sideBar_Option_Button">Favoritos</button>
      <button className="sideBar_Option_Button">Informações pessoais</button>
      <button className="sideBar_Option_Button">Fale conosco</button>
      <button className="sideBar_Logout_Button">Logout</button>
    </div>
  );
}
