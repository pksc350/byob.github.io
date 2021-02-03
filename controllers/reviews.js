const Drink = require("../models/drink");

module.exports = {
  create,
};

function create(req, res) {
  Drink.findById(req.params.id, function (err, drink) {
    drink.reviews.push(req.body);
    drink.save(function (err) {
      if (err) console.log(err);
      res.redirect(`/drinks/${drink._id}`);
    });
  });
}
