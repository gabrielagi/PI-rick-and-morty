import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, onAddRandomCharacter }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onAddRandomCharacter}>Agregar Random</button>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </nav>
  );
};

export default Nav;
