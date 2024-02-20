//? Con express
const express = require("express");
const server = express();
const router = require("./routes");

server.use(express.json());
server.use("/rickandmorty", router);

module.exports = server;

//? Con HTTP
/* const http = require("http");
const getCharById = require("./controllers/getCharById");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
  } else if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    getCharById(res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({message: `La ruta ${req.url} no coincide con ninguna de las establecidas`}));
    res.end();
  }
}); */

