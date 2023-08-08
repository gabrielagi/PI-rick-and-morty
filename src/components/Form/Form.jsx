import React from "react";
import { useState } from "react";
import validation from "../Validation/Validation";
import {
  FormContainer,
  FormHeading,
  FormLabel,
  //SocialContainer,
  StyledButton,
  //SocialIcon,
  StyledInput,
  //SocialButton,
  ErrorMsg,
} from "./Form.styled-component";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   login(userData);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = validation(userData); // Validar nuevamente antes de enviar los datos
    setErrors(updatedErrors);

    // Verificar si ambos campos están llenos antes de enviar los datos al método login
    if (userData.email.trim() !== "" && userData.password.trim() !== "") {
      if (Object.keys(updatedErrors).length === 0) {
        login(userData);
      }
    }
  };

  return (
    <FormContainer>
      <FormHeading>Iniciar Sesión</FormHeading>

      <FormLabel htmlFor="email">Email</FormLabel>
      <StyledInput
        type="text"
        placeholder="Email or Phone"
        id="username"
        name="email" // Update the name to match your state property
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}

      <FormLabel htmlFor="password">Password</FormLabel>
      <StyledInput
        type="text"
        placeholder="Password"
        id="password"
        name="password" // Update the name to match your state property
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}

      <StyledButton onClick={handleSubmit}>Log In</StyledButton>
      {/* 
      <SocialContainer>
        <SocialButton>
          <SocialIcon className="fab fa-google"></SocialIcon>Google
        </SocialButton>
        <SocialButton marginLeft>
          <SocialIcon className="fab fa-facebook"></SocialIcon>Facebook
        </SocialButton>
      </SocialContainer> */}
    </FormContainer>
  );
};

export default Form;
