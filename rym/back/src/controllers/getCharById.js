const getCharById_API = require("../handlers/getCharById_API");

function getCharById(res, id) {
  getCharById_API(id)
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(data));
    })
    .catch((err) => {
      let error =
        Object.keys(err).length === 0
          ? { message: "Character not found" }
          : err;
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify(error));
    })
    .finally(() => {
      res.end();
    });
}

module.exports = getCharById;
