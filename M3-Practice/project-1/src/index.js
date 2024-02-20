require("dotenv").config();
const { PORT } = process.env;
const server = require("./server.js");


server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
