import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("../assets/error_background.jpg");
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
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
    background-color: #83d875;
  }
`;

export { ErrorContainer, Title, Subtitle, Button };
