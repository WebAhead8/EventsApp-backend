const model = require("../database/model/userModels")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()
function getUserByTokenHandler(req, res, next) {

}
module.exports = login;