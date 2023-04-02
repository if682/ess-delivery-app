import SearchBar from "./SearchBar";
import "./styles.css";

const Header = () => {
  return (
    <div class="container">
      <img src="../../assets/logo.svg" alt="Logo do Letterboxcin" />
      <SearchBar />
      <button className="logout-button" onClick={() => console.log('saindo')}>
        <img src="../../assets/logout-icon.svg" alt="Ícone de logout" />
      </button>

      <hr />

    </div>
  );
}

export default Header;