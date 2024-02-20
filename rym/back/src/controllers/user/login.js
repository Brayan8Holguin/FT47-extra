require("dotenv").config();
const users = require("../../utils/users");

function login(req, res) {
  const { email, password } = req.body;
  const userExists = users.find((user) => user.email === email);
  if (email === userExists.email && password === userExists.password) {
    res.status(200).json({ message: "Login successful", access: true });
  } else {
    res.status(401).json({ message: "Unauthorized", access: false });
  }
}

module.exports = login;
