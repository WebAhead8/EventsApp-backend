const mongoose = require("mongoose");
const wish = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",

    },
    wish: {
        type: String
    },
    image: {
        type: String
    }
});
module.exports = Wish = mongoose.model("wish", wish);
