const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require("morgan");

server.use(express.json());
server.use(morgan("dev"));

//1. Se genera permiso al Front para acceder al Back
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//2. Se accede a la ruta
server.use("/rickandmorty", router);

module.exports = server;
