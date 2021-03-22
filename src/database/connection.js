const mongoose = require("mongoose");
require('dotenv').config()

const connectDB =  () => {
    mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(res => {
        console.log("database Connected");
    }).catch(err=>{console.log(err)})
}

module.exports = connectDB;