import SearchBar from "./SearchBar";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  return (
    <div class="container">
      <button onClick={() => navigate("/profile")} className="logo">
        <img src="../../assets/logo.svg" alt="Logo do Letterboxcin" />
      </button>
      <SearchBar />
      <button className="logout-button" onClick={() => console.log('saindo')}>
        <img src="../../assets/logout-icon.svg" alt="Ícone de logout" />
      </button>

      <hr className="header-hr"/>

    </div>
  );
}

export default Header;