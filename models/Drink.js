const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: {
      Number,
      min: 1,
      max: 5,
    },
  },
});

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
  reviews: [reviewSchema],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
