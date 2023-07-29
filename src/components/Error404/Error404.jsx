import React from "react";
import { NavLink } from "react-router-dom";
import {
  ErrorContainer,
  Title,
  Subtitle,
  Button,
} from "./Error404.styled-component";

const Error404 = () => {
  return (
    <ErrorContainer>
      <Title>Oops!</Title>
      <Subtitle>404 - The Page can't be found</Subtitle>
      <NavLink to="/home">
        <Button>Home</Button>
      </NavLink>
    </ErrorContainer>
  );
};

export default Error404;
