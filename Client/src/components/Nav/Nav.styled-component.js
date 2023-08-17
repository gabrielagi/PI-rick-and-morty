import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #080a09;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between; /* Alineación entre elementos */
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  margin-left: 10px;
  background-color: #a4ff31;
  color: #000;
  font-size: 10px;
  padding: 3px 8px;
  border: none;
  border-radius: 4px 0px 4px 0px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7ddb30;
  }
`;

export const NavButtonAbout = styled(NavButton)`
  background-color: #ffd166;
  color: #1d252d;

  &:hover {
    background-color: #ffe9ad;
    box-shadow: 0 0 2px #fff, 0 0 5px #ff0, 0 0 10px #f20, 0 0 10px #f00;
  }
`;

export const NavButtonLogOut = styled(NavButton)`
  background-color: red;
  color: #fff;
  margin-right: 10px;

  &:hover {
    background-color: #c20000;
  }
`;

export const NavButtonFavorites = styled(NavButton)`
  background-color: #fff;
  color: #1d252d;

  &:hover {
    background-color: #ffa4b2;
  }
`;

export const NavButtonHome = styled(NavButton)`
  background-color: #5dffde;
  color: #1d252d;

  &:hover {
    background-color: #3fc5ff;
  }
`;
