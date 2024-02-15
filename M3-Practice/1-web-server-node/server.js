const http = require("http");
const URL = "https://jsonplaceholder.typicode.com";
const https = require("https");

function getJSON(url, callback) {
    https.get(url, (res) => {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
        let response = JSON.parse(body);
      callback(response);
    });
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, World!");
    res.end();
  } else if (req.url === "/users") {
      // Armar la url, con URL base y el endpoint
      const url = `${URL}/users`;
      // Llamar a la función getJSON con la url y una función callback
    getJSON(url, (response) => {
      res.write(JSON.stringify(response));
      res.end();
    });
  } else if (req.url === "/posts") {
    const url = `${URL}/posts`;
    getJSON(url, (response) => {
      res.write(JSON.stringify(response));
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
});

module.exports = server;
