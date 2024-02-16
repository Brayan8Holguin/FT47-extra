const routes = require("express").Router()
const getHola = require("./getHola")
const getProducts = require("./getProducts")
const getUsers = require("./getUsers")
const postUser = require("./postUser")
const validarUsuario = require("../middlewares/validarUsuario")

routes.get("/", getHola)
routes.get("/users", getUsers)
routes.get("/products", getProducts)
routes.use(validarUsuario)
routes.post("/users", postUser)

module.exports = routes