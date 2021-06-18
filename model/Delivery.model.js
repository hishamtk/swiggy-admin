const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var delivarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bike: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://img.icons8.com/bubbles/100/000000/user.png",
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Delivery", delivarySchema);
