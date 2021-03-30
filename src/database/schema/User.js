const mongoose = require("mongoose");
const user = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String
    },
    profileImage: {
        type: String
    }
})
module.exports = User = mongoose.model('user', user)