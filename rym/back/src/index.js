require("dotenv").config();
const server = require("./server");

const { PORT } = process.env;

server.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });