const routes = require("express").Router
const getUsuarios = require("./getUsuarios")


routes.get("/usuario",getUsuarios)