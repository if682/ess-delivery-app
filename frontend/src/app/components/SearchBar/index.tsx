import "./index.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Para onde?" className="test" />
      <input type="date" />
      <input type="number" placeholder="1 adulto" />
      <button className="search_button">Pesquisar</button>
    </div>
  );
}
