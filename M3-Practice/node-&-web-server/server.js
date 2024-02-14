const http = require("http");
const getData = require("./getData");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to the homepage</h1>");
      res.end();
      break;
    case "/users":
      getData("/users", (err, data) => {
        if (err) {
          console.log(err);
          /* res.writeHead(500, { "Content-Type": "text/html" });
          res.write(err);
          res.end(); */
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/posts":
      getData("/posts", (err, data) => {
        if (err) {
          console.log(err);
          /* res.writeHead(500, { "Content-Type": "text/html" });
          res.write(err);
          res.end(); */
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Page not found</h1>");
      res.end();
      break;
  }
});

module.exports = server;
