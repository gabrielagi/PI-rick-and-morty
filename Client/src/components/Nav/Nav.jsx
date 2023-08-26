import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";
import {
  NavBar,
  NavButton,
  NavContainer,
  NavButtonLogOut,
  NavButtonFavorites,
  NavButtonHome,
  NavButtonAbout,
  NavButtonRandom,
} from "./Nav.styled-component";

const Nav = ({ onSearch, onAddRandomCharacter, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <NavBar>
      <NavContainer>
        <NavLink to="/home">
          <NavButtonHome>Home</NavButtonHome>
        </NavLink>

        <NavLink to="/about">
          <NavButtonAbout>About</NavButtonAbout>
        </NavLink>
        <NavLink to="/favorites">
          <NavButtonFavorites>❤️</NavButtonFavorites>
        </NavLink>
      </NavContainer>
      <NavContainer>
        <SearchBar onSearch={onSearch} />
        <NavButtonRandom onClick={onAddRandomCharacter}>
          Agregar Random
        </NavButtonRandom>
      </NavContainer>
      <NavContainer>
        <NavButtonLogOut onClick={handleLogOut}>LogOut</NavButtonLogOut>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;
