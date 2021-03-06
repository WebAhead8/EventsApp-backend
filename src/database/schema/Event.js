const mongoose = require("mongoose");
const event = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
  image: {
    type: String,
  }
  
});
module.exports = Event = mongoose.model("event", event);
