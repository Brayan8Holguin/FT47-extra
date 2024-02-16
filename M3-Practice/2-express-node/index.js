// Importa Express
const express = require("express");
const server = express();

// Middleware para el manejo de solicitudes JSON
server.use(express.json());

//Middleware para validar los permisos de un usuario
function validarPermisos(req, res, next) {
  if (!req.query || req.query.user !== "admin") {
    throw new Error("No tienes permisos para realizar esta acción");
  }
  next();
}

// Modelos de datos simulados
let usuarios = [];
let productos = [];

// Rutas para usuarios
server.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

server.use(validarPermisos);
server.post("/usuarios", (req, res) => {
  if (!req.query || req.query.user !== "admin") {
    throw new Error("No tienes permisos para realizar esta acción");
  } else {
    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
  }
});

// Rutas para productos
server.get("/productos", (req, res) => {
  res.json(productos);
});

server.use(validarPermisos);
server.post("/productos", (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Manejo de errores
server.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
