const { v4: uuidv4 } = require("uuid");
const users = require("../../utils/users");

function register(req, res) {
    const { email, password } = req.body;
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
        res.status(400).json({ message: "User already exists, use Login" });
    } else if (email && password) {
        users.push({ id: uuidv4(), email, password });
        res.status(201).json({ message: "User created" });
    } else {
        res.status(400).json({ message: "Email and password are required" });
    }
}

module.exports = register;