const model = require("../database/model/userModels")
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()
function getUserByTokenHandler(req, res, next) {

  const user = req.user;
  model.getUserById(user)
    .then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        const error = new Error("no user Found");
        error.status = 404;
        next(error);
      }
    }).catch(next)

}
module.exports = getUserByTokenHandler;