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
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});
