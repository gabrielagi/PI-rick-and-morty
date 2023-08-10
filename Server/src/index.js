const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Da premisos al Front para que pueda realizar peticiones, permite la conexion a Back

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);

      const characterFound = data.find((character) => {
        return character.id === +id; //transformo el id de String a Number colocando un + delante
      });

      return res //Agrego un return para que se corte la ejecucion
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(characterFound));
    }
  })
  .listen(3001); //Versiones mayores a 18 dejar solo el puerto eliminar(3001, localhost)
