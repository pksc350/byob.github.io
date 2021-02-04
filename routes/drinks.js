const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

//prepend with /drinks

router.get("/", drinksCtrl.index);
router.get("/add", drinksCtrl.new);
router.post("/", drinksCtrl.create);
router.get("/:id", drinksCtrl.show);
router.delete("/:id", drinksCtrl.remove);

module.exports = router;
