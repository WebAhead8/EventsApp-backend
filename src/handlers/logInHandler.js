const model = require("../database/model/userModels")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()
function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    model.getUserByEmail(email).then(result => {
        if (result[0]) {
            bcrypt.compare(password, result[0].password).then(match => {
                if (!match) {
                    res.status(401).send({error:" invalid email or password"})
                } else {
                    const token = jwt.sign({ user: result.id }, process.env.JWT_SECRET);
                    res.status(200).send({ access_token: token })
                }
            }).catch(next)

        } else {
            res.status(401).send({error:" invalid email or password"})
        }
    }).catch(next)


}
module.exports = login;