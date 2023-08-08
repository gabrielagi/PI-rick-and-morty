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
`;

const radioactiveAnimation = keyframes`
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
  border: none;
  outline: none;
  margin: 6px auto; /* Center-align the input fields horizontally */
  box-sizing: border-box; /* Ensure proper sizing */

  &::placeholder {
    color: #e5e5e5;
  }
`;

export const StyledButton = styled.button`
  margin-top: 40px;
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
  background-image: linear-gradient(45deg, #29a745, #3ac162, #ffeb3b, #29a745);
  background-size: 300% 100%;
  transition: background 0.5s ease-in-out;
  animation: ${radioactiveAnimation} 3s linear infinite;

  &:hover {
    background-position: 100% 0;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SocialContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const SocialButton = styled.div`
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  margin-left: ${(props) => (props.marginLeft ? "25px" : "0")};
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }
`;

export const SocialIcon = styled.i`
  margin-right: 3px; /* Smaller margin-right */
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
