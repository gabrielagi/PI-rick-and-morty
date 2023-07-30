import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centrar verticalmente */
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  background-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  padding: 20px;

  align-items: center;
  justify-content: center; /* Centrar verticalmente */

  width: 50%;
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
  margin-bottom: 5px;

  width: 100%; /* Hace que el input ocupe todo el ancho disponible */
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
`;
