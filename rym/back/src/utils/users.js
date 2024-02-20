require("dotenv").config();
const { USER_ADMIN, PASSWORD_ADMIN } = process.env;
const users = [{ email: USER_ADMIN, password: PASSWORD_ADMIN }];

module.exports = users;
