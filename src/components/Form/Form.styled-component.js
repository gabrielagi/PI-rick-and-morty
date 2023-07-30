import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  padding: 20px;

  align-items: center;
  justify-content: center; /* Centrar verticalmente */

  margin: 160px auto; /* Centra el botón horizontalmente y agrega un margen superior */
  width: 30%;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;

  padding: 20px;
  width: 85%;
  align-items: center;
  justify-content: center; /* Centrar verticalmente */

  margin: 0 auto; /* Centra el botón horizontalmente */

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: 0 auto; /* Centra el botón horizontalmente */
  padding-bottom: 15px;

  font-size: 13px;

  @media screen and (max-width: 480px) {
    width: 80%;

    font-size: 15px;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #000;
  margin-bottom: 15px;
  width: 85%;

  /* Color de fondo verde agregado */
  background-color: #d0ff94;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  background-color: #7ddb30;
  color: #000;
  font-size: 12px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto; /* Centra el botón horizontalmente */
  margin-top: 15px; /* Agrega un margen superior para separar del mensaje de error */

  &:hover {
    background-color: #a4ff31;
  }

  @media screen and (max-width: 480px) {
    width: 40%;

    font-size: 15px;
  }
`;
