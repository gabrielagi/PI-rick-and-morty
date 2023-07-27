import { createGlobalStyle } from "styled-components";
import rickAndMortyBackground from "./assets/rick-and-morty-garage-lab.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
      position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(45deg, #ff0000, #42b883, #ffffff, #ff0000),
    url(${rickAndMortyBackground});
  background-size: 400% 400%, cover;
    font-family: 'Arial', sans-serif;
  }
`;

export const theme = {
  primaryColor: "#42b883",
  secondaryColor: "#35495e",
};
