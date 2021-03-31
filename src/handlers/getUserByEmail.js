const model = require("../database/model/userModels")
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()
function getUserByEmail(req, res, next) {

  const email =req.body.email;
  model.getUserByEmail(email)
    .then(result => {
      if (result.length>0) {
        result[0].password="";
        res.status(200).send(result);
      } else {
        const error = new Error("no user Found");
        error.status = 404;
        next(error);
      }
    }).catch(next)

}
module.exports = getUserByEmail;