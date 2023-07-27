import styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 48px;
    color: #ff0000;
    margin-bottom: 10px;
    animation: ${shakeAnimation} 2s infinite;
  }

  h2 {
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  button {
    background-color: #42b883;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #35495e;
    }
  }
`;
