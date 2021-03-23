const model = require("../database/model/userModels")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()
function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;


    model.getUserByEmail(email).then(result => {
        if (result) {
            bcrypt.compare(password, result.password).then(match => {
                if (!match) {
                    const error = new Error("no user Found");
                    error.status = 404;
                    next(error);
                } else {
                    const token = jwt.sign({ user: result.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                    res.status(200).send({ access_token: token })
                }
            })

        } else {
            const error = new Error("no user Found");
            error.status = 404;
            next(error);
        }
    }).catch(next)


}
module.exports = login;