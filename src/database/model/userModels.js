const { db } = require("../schema/User")
const mongoose = require("mongoose");
const User = require('../schema/User')

function addUser({ details }) {
    let userModel = new User(details)
    return userModel.save()
}

function getUserByEmail(email) {
    return User.find({ email: email })
}

function getUserById(id) {
  const objectId = mongoose.Types.ObjectId(id);
    return User.find({ _id: objectId })
}
module.exports = { getUserByEmail, addUser,getUserById };