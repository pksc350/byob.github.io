const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [],
    required: true,
  },
  directions: {
    type: [],
    required: true,
  },
  reviews: [],
});

module.exports = mongoose.model("Drink", drinkSchema);
