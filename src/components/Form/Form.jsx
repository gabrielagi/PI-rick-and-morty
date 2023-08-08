import React from "react";
import { useState } from "react";
import validation from "../Validation/Validation";
import {
  FormContainer,
  //FormHeading,
  StyledButton,
  StyledInput,
  InputContainer,
  ErrorMsg,
} from "./Form.styled-component";
import loginImage from "./../../assets/login-logo.png";

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
      <img src={loginImage} alt="Login" style={{ width: "250px" }} />
      {/* <FormHeading>Iniciar Sesión</FormHeading> */}

      {/* <FormLabel htmlFor="email">Email</FormLabel> */}
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Email"
          id="username"
          name="email" // Update the name to match your state property
          value={userData.email}
          onChange={handleChange}
        />

        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      </InputContainer>
      {/* <FormLabel htmlFor="password">Password</FormLabel> */}
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Password"
          id="password"
          name="password" // Update the name to match your state property
          value={userData.password}
          onChange={handleChange}
        />

        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
      </InputContainer>
      <StyledButton onClick={handleSubmit}>Log In</StyledButton>
    </FormContainer>
  );
};

export default Form;
