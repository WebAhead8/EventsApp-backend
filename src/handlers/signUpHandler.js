const model = require("../database/model/userModels")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs");
dotenv.config()

function signUpHandler(req,res,next){
    const body = req.body;

    if (!body.firstName || !body.lastName || !body.email || !body.birthday || !body.phoneNumber || !body.password)
    {
        res.status(422).send({error:"validation Error"})
    }else{
        const pass = req.body.password;
        bcrypt
            .genSalt(12)
            .then(salt => bcrypt.hash(pass, salt))
            .then(hash => {
                body.password = hash;}
                ).then(()=>{
                    
                    model.addUser(body).then(user=>{
                        const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET);
                        user.access_token = token;
                        res.status(201).send(user);
                    }).catch(err=>{
                        if(err.code===11000)
                        {
                            res.status(409).send({error:"email already Exist"})
                        }// if
                        else{
                            next(err)
                        }// else
                    })// catch
    
    
                })
    }
   
}

module.exports =  signUpHandler;