const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: String,
  drinks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drink",
    },
  ],
  googleId: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
