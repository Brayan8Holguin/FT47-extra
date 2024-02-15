const express = require("express");
const routes = require("./routes/index");
const PORT = 3001;
const server = express();

server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
/* server.get("/", (req, res) => {
  res.send("Hola");
});

server.use(validarUsuario);

function validarUsuario(req, res, next) {
  console.log("hola desde el middleware");
  // console.log(req)
  next();
}

server.get("/users", (req, res) => {
  console.log(req.params);
  const obj = { message: "Hola users", ...req.params };
  res.send(obj);
});

server.use(validarUsuario);

server.get("/users/:id", (req, res) => {
  console.log(req.params);
  // req.params -> {id: "loquequiera"}
  const obj = { message: "Hola users id", ...req.params };
  // { message: "Hola users id", id: "loquequiera" }
  res.send(obj);
});

server.get("/users/:id/:name", (req, res) => {
  console.log(req.params);
  const obj = { message: "Hola users id y nombre", ...req.params };
  res.send(obj);
});

server.get("/users/:id/:name/:age", (req, res) => {
  console.log(req.params);
  const obj = { message: "Hola users de is, nombre y edad", ...req.params };
  res.send(obj);
});

server.get("/products", (req, res) => {
  console.log(req.query);
  // req.query = { category: tecnologia }
  const obj = { message: "Hola products", ...req.query };
  res.send(obj);
}); */
