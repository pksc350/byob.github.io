const Drink = require("../models/drink");

module.exports = {
  index,
};

function index(req, res) {
  Drink.find({}, function (err, drinks) {
    res.render("drinks/index", { title: "All Drinks", drinks });
  });
}
