const server = require("./src/app");
const PORT = 3001;
const { conn } = require("./src/DB_connection");

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log(`Server raised in port: ${PORT}`);
});
