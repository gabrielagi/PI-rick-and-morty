import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #080a09;
  padding: 3px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 0px 40px;
}
`;

export const NavButton = styled.button`
  margin: 5px 15px 0px;
  background-color: transparent;
  color: #39ff14;
  font-size: 12px;
  padding: 6px 18px;
  border: 1px solid #39ff14;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:active,
  &:focus {
    border: 1px solid #ff44cc;
    color: #ff44cc;
    box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.5);
  }
`;

export const NavButtonAbout = styled(NavButton)`
  font-family: Roboto, sans-serif;
  @media screen and (min-width: 768px) {
    margin: 5px 40px;
  }
`;

export const NavButtonLogOut = styled(NavButton)`
  background-color: red;
  color: #fff;
  margin-right: 30px;
  margin: 5px 80px;
  border: none;

  &:hover {
    background-color: #c20000;

    box-shadow: none;
    border: none;
    color: #fff;
  }
`;

export const NavButtonRandom = styled(NavButton)`
  border: 1px solid #ff44cc;
  color: #ff44cc;
  &:hover {
    color: #fff;
    box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.5);
  }
`;

export const NavButtonFavorites = styled(NavButton)`
  &:hover {
    background-color: #ffa4b2;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const NavButtonHome = styled(NavButton)`
  font-family: Roboto, sans-serif;
`;
