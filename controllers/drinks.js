const Drink = require("../models/drink");
const User = require("../models/User");

module.exports = {
  index,
  new: newDrink,
  create,
  show,
  remove,
};

// function index(req, res) {
//   User.find({}, function (err, drinks) {
//     res.render("drinks/index", { title: "All Drinks", drinks, user: req.user });
//   });
// }

function index(req, res) {
  Drink.find({})
    .populate("user")
    .exec(function (err, drinks) {
      if (err) return console.log(err);
      res.render("drinks/index", {
        title: "All Drinks",
        drinks,
        user: req.user,
      });
    });
}

function newDrink(req, res) {
  res.render("drinks/new", { title: "Add Drink" });
}

// function create(req, res) {
//   const drink = new Drink(req.body);
//   drink.save(function (err) {
//     if (err) return console.log(err);
//     res.redirect("/drinks");
//   });
// }

function create(req, res) {
  req.body.user = req.user._id;
  Drink.create(req.body, (err, createDrink) => {
    if (err) return console.log(err);
    User.findById(createDrink.user, (err, foundUser) => {
      if (err) return console.log(err);
      foundUser.drinks.push(createDrink._id);
      foundUser.save();
      res.redirect("/drinks");
    });
  });
}

function show(req, res) {
  Drink.findById(req.params.id, function (err, drink) {
    res.render("drinks/show", { title: `${req.params.title}`, drink });
  });
}

function remove(req, res, next) {
  Drink.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/drinks");
    next();
  });
}
