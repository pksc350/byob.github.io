const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const drinksCtrl = require("../controllers/drinks");

router.post("/drink/:id", reviewsCtrl.create);
router.get("/drinks/:id", drinksCtrl.show);

module.exports = router;
