import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";
import {
  NavBar,
  NavButton,
  NavContainer,
  NavButtonLogOut,
  NavButtonFavorites,
} from "./Nav.styled-component";

const Nav = ({ onSearch, onAddRandomCharacter, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <NavBar>
      <NavContainer>
        <SearchBar onSearch={onSearch} />
      </NavContainer>
      <div>
        <NavButton onClick={onAddRandomCharacter}>Agregar Random</NavButton>
        <NavLink to="/about">
          <NavButton>About</NavButton>
        </NavLink>
        <NavLink to="/home">
          <NavButton>Home</NavButton>
        </NavLink>
        <NavLink to="/favorites">
          <NavButtonFavorites>Favorites ❤️</NavButtonFavorites>
        </NavLink>
        <NavButtonLogOut onClick={handleLogOut}>LogOut</NavButtonLogOut>
      </div>
    </NavBar>
  );
};

export default Nav;
