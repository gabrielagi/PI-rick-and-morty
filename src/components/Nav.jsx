import SearchBar from "./SearchBar";

const Nav = ({ onSearch, onAddRandomCharacter }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onAddRandomCharacter}>Agregar Random</button>
    </nav>
  );
};

export default Nav;
