const users = require("../data/users")

function getUsers(req, res) {
    res.send(JSON.stringify(users))
}

module.exports = getUsers