const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

//prepend with /drinks

router.get("/", drinksCtrl.index);
router.get("/add", drinksCtrl.new);
router.post("/", drinksCtrl.create);

module.exports = router;
