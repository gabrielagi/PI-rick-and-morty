const validation = (userData) => {
  const errors = {};
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email ingresado no es válido";
  }
  if (!userData.email) {
    errors.email = "Debe de ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no debe superar los 35 caracteres";
  }
  if (!/(?=.*[0-9])/.test(userData.password)) {
    errors.password = "La contraseña debe contender al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "La contraseña debe de tener un tamaño entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
