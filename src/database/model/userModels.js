const { db } = require("../schema/User")
const mongoose = require("mongoose");
const User = require('../schema/User')

function addUser(details) {
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

function editUserFirstName(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { firstName: userDetails.firstName } }
    );
}

function editUserLastName(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { lastName: userDetails.lastName } }
    );
}

function editUserEmail(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { Email: userDetails.Email } }
    );
}

function editUserPhone(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { phoneNumber: userDetails.phoneNumber } }
    );
}

function editUserBirthday(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { birthday: userDetails.birthday } }
    );
}

function editUserImage(userDetails) {
    const objectId = mongoose.Types.ObjectId(userDetails.id);
    return User.updateOne(
        { _id: objectId },
        { $set: { profileImage: userDetails.profileImage } }
    );
}

module.exports = { getUserByEmail, addUser, getUserById, editUserFirstName, editUserLastName, editUserEmail, editUserPhone, editUserBirthday, editUserImage };