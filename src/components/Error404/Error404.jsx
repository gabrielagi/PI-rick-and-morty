import React from "react";
import { NavLink } from "react-router-dom";
import { ErrorContainer } from "./Error404.styled-component";

const Error404 = () => {
  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <h2>404 - The Page can't be found</h2>
      <button>
        <NavLink to="/home">Vuelve al inicio</NavLink>
      </button>
    </ErrorContainer>
  );
};

export default Error404;
