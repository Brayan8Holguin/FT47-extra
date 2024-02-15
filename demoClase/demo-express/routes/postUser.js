let users = require("../data/users");
function postUser(req, res) {
  let id = 1;
  id++;
  const user = req.body;
  // aca seria para agregarlo a una bdd
  users.push({ id, ...user });
  res.send("Usuario creado con exito");
}

module.exports = postUser;