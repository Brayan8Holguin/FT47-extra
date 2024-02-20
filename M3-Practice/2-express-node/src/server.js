const express = require("express");
const { v4: uuidv4 } = require("uuid");
const server = express();
const { users, products } = require("../models/index");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

// users

server.get("/users", (req, res) => {
  res.send(users);
});

server.post("/users", (req, res) => {
  const id = uuidv4();
  const newUser = { id, ...req.body };
  users.push(newUser);
  res.send(newUser);
});

server.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  const newUser = { id, ...req.body };
  users[users.indexOf(user)] = newUser;
  res.send(newUser);
});

server.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  Object.assign(user, req.body);
  res.send(user);
});

server.use((req, res, next) => {
  const queries = req.query;
  console.log(queries);
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

server.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  users.splice(users.indexOf(user), 1);
  res.send({ message: "User deleted successfully", ...user });
});

// products

server.get("/products", (req, res) => {
  res.send(products);
});

server.post("/products", (req, res) => {
  const id = uuidv4();
  const newProduct = { id, ...req.body };
  products.push(newProduct);
  res.send(newProduct);
});

server.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  const newProduct = { id, ...req.body };
  products[products.indexOf(product)] = newProduct;
  res.send(newProduct);
});

server.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  Object.assign(product, req.body);
  res.send(product);
});

// middleware para administradores
server.use((req, res, next) => {
  const queries = req.query;
  console.log(queries);
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

server.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  products.splice(products.indexOf(product), 1);
  res.send({ message: "Product deleted successfully", ...product });
});

module.exports = server;
