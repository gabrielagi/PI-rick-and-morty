import styled, { keyframes } from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  margin: auto;
  padding: 10px;

  transform: translate(-50%, -50%);
  left: 49%;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 25px 35px;
  text-align: center;

  width: 200px;
  padding: 20px 25px;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    width: 250px;
    padding: 20px 25px;
  }
`;

export const LoginImage = styled.img`
  display: block;
  margin: 0;
  width: 205px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 32px; /* Add margin to create space between input containers */
  position: relative;
`;

export const StyledInput = styled.input`
  display: block;
  height: 32px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 8px;
  font-size: 10px;
  font-weight: 300;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.1);
  outline: none;
  margin: 6px auto;
  box-sizing: border-box;

  &::placeholder {
    color: #e5e5e5;
  }

  &:focus {
    border-color: #ff6bd6; /* Cambia el color del borde en el foco */
  }

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    height: 40px;
    font-size: 12px;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  color: red;
  font-size: 10px;
  margin: 0px;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    width: 250px;
    padding: 0px;
    font-size: 13px;
  }
`;

const psychedelicAnimation = keyframes`
   0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 10px 0;
  font-size: 14px;
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

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    width: 250px;
    padding: 12px;
    font-size: 16px;
  }
`;
