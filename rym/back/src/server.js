const http = require("http");
const data = require("./utils/data");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
  } else if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1);

    const character = data.find((character) => character.id == id);

    if (character) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(character));
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Character not found");
    }
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not Found");
    res.end();
  }
});

module.exports = server;
