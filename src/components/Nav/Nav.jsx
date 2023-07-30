import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";
import {
  NavBar,
  NavButton,
  NavContainer,
  NavButtonLogOut,
} from "./Nav.styled-component";

const Nav = ({ onSearch, onAddRandomCharacter, logOut }) => {
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
        <NavButtonLogOut onClick={logOut}>LogOut</NavButtonLogOut>
      </div>
    </NavBar>
  );
};

export default Nav;
