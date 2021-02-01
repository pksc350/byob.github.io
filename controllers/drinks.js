const Drink = require("../models/drink");

module.exports = {
  index,
  new: newDrink,
};

function index(req, res) {
  Drink.find({}, function (err, drinks) {
    res.render("drinks/index", { title: "All Drinks", drinks });
  });
}

function newDrink(req, res) {
  res.render("drinks/new", { title: "Add Drink" });
}
