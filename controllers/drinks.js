const Drink = require("../models/drink");

module.exports = {
  index,
  new: newDrink,
  create,
  show,
};

function index(req, res) {
  Drink.find({}, function (err, drinks) {
    res.render("drinks/index", { title: "All Drinks", drinks });
  });
}

function newDrink(req, res) {
  res.render("drinks/new", { title: "Add Drink" });
}

function create(req, res) {
  const drink = new Drink(req.body);
  drink.save(function (err) {
    if (err) return console.log(err);
    res.redirect("/drinks");
  });
}

function show(req, res) {
  Drink.findById(req.params.id, function (err, drink) {
    res.render("drinks/show", { title: `${req.params.title}`, drink });
  });
}
