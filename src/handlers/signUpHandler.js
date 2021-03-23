const model = require("../database/model/userModels")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()

function signUpHandler(res,req,next){
    const body=req.body;
    if (!body.firstName || !body.lastName || !body.email || !body.birthday || !body.phoneNumber || !body.password)
    {
        const error = new Error("validation error");
        error.status=422;
        next(error);
    }
    const pass = req.body.password;
    bcrypt
        .genSalt(12)
        .then(salt => bcrypt.hash(pass, salt))
        .then(hash => {
            body.password = hash;
        
    model.addUser(body).then(user=>{
        const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        user.access_token = token;
        res.status(201).send(user);
    }).catch(err=>{
        if(err.code==="23505")
        {
            const error = new Error("email Already Exist");
            error.status=404;
            next(error);
        }// if
        else{
            next(err)
        }// else
    })// catch
})
}

module.exports =  signUpHandler;