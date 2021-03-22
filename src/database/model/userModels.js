const { db } = require("../schema/User")
const mongoose = require("mongoose");
const User = require('../schema/User')

function addUser({details}){
    let userModel = new User(details)
    return userModel.save()
}

function getUserByEmail(email){
    return User.find({email:email})
}
