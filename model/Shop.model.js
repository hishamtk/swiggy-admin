const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://png.pngtree.com/element_origin_min_pic/17/03/18/93848c6966321c046d75644a4d21abb0.jpg",
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Shop", shopSchema);
