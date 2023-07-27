import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <h2>404 - The Page can't be found</h2>
      <button>
        <NavLink to="/home">Vuelve al inicio</NavLink>
      </button>
    </div>
  );
};

export default Error404;
