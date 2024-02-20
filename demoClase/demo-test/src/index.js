const express = require("express")
const server = express()

server.get("/", (req, res) => {
  res.status(200).send("Hola")
})

function resta(a, b) {
  console.log("resta")
  return a - b;
}

function suma(a, b) {
  return a + b;
}

function undefinedFunction() { }

const definedVariable = "hola"

const nullVariable = null

module.exports = {resta, suma, undefinedFunction, definedVariable, nullVariable, server};
