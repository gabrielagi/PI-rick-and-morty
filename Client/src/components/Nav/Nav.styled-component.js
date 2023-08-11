import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #1d1c1c;
  padding-top: 10px;
  padding-bottom: 8px;
  display: flex;
  position: fixed;
  justify-content: center; /* Centra horizontalmente los elementos dentro del NavBar */
  align-items: center;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    flex-direction: column;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  margin-left: 10px;
  background-color: #7ddb30;
  color: #000; /* Cambiar el color del texto a negro */
  font-size: 12px; /* Ajustar el tamaño de la fuente */
  padding: 5px 10px; /* Ajustar el padding para hacer el botón más pequeño */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a4ff31;
  }
`;

export const NavButtonAbout = styled(NavButton)`
  background-color: #ffd166;
  color: #1d252d; /* Cambiar el color del texto a blanco */

  &:hover {
    background-color: #ffe9ad;
    box-shadow: 0 0 2px #fff, 0 0 5px #ff0, 0 0 10px #f20, 0 0 10px #f00;
  }
`;

export const NavButtonLogOut = styled(NavButton)`
  background-color: red;
  color: #fff; /* Cambiar el color del texto a blanco */

  &:hover {
    background-color: #c20000;
  }
`;

export const NavButtonFavorites = styled(NavButton)`
  background-color: #fff;
  color: #1d252d; /* Cambiar el color del texto a blanco */

  &:hover {
    background-color: #ffa4b2;
  }
`;

export const NavButtonHome = styled(NavButton)`
  background-color: #5dffde;
  color: #1d252d; /* Cambiar el color del texto a blanco */

  &:hover {
    background-color: #3fc5ff;
  }
`;
