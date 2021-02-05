const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

//prepend with /drinks

router.get("/", drinksCtrl.index);
router.get("/add", drinksCtrl.new);
router.post("/", drinksCtrl.create);
router.get("/:id", drinksCtrl.show);
router.delete("/:id", drinksCtrl.remove);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
