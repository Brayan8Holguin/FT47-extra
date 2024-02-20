const express = require("express");
const server = express();
const router = require('../routes');

server.use(express.json());
server.use('/api', router);

module.exports = server;