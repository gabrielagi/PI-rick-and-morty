import styled, { keyframes } from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  margin: auto;
  padding: 10px;

  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 25px 35px;
  text-align: center; /* Center-align all child elements */

  img {
    width: 100px; /* Ajusta el tamaño de la imagen según tu preferencia */
    height: auto;
    margin-bottom: 20px; /* Agrega un margen inferior para separar la imagen de los campos */
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 32px; /* Add margin to create space between input containers */
  position: relative;
`;

const psychedelicAnimation = keyframes`
   0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledInput = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 8px;
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  outline: none;
  margin: 6px auto;
  box-sizing: border-box;

  &::placeholder {
    color: #e5e5e5;
  }

  &:focus {
    border-color: #ff6bd6; /* Cambia el color del borde en el foco */
  }
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background-image: linear-gradient(
    45deg,
    #79fc6f,
    #ff59e6,
    #62ff1f,
    #f1ff29,
    #54ff68
  );
  background-size: 500% 100%;
  transition: background 0.5s ease-in-out;
  animation: ${psychedelicAnimation} 5s linear infinite;

  &:hover {
    background-color: #59fff1;
    background-image: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1),
      0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.4);
    animation: none;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  color: red;
  font-size: 12px;
  margin: 0px;
`;

export const FormHeading = styled.h3`
  font-size: 24px; /* Smaller font size */
  font-weight: 500;
  line-height: 30px; /* Smaller line-height */
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px; /* Smaller margin-bottom */
`;

export const FormLabel = styled.label`
  display: block;
  margin-top: 20px; /* Smaller margin-top */
  font-size: 14px; /* Smaller font size */
  font-weight: 500;
  color: #ffffff;
`;
