// const http = require("http");
// //const data = require("./utils/data");
// const { getCharById } = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"); //Da premisos al Front para que pueda realizar peticiones, permite la conexion a Back

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);

//       getCharById(res, +id);
//     }
//   })
//   .listen(3001); //Versiones mayores a 18 dejar solo el puerto eliminar(3001, localhost)

const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require('morgan')
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'))

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

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});
