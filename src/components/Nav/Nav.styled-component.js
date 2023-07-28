import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #292929;
  padding: 10px;
  display: flex;
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
  background-color: #97ce4c;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #83d875;
  }
`;
