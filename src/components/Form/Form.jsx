import React from "react";
import { useState } from "react";
import validation from "../Validation/Validation";
import {
  FormContainer,
  StyledForm,
  StyledButton,
  StyledInput,
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
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <StyledInput
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        <label htmlFor="password">Password: </label>
        <StyledInput
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
