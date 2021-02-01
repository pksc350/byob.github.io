const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

//prepend with /drinks

router.get("/", drinksCtrl.index);
router.get("/add", drinksCtrl.new);

module.exports = router;
