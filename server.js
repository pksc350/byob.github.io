//requiring env
require("dotenv").config();

const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");

const PORT = 3300;

const app = express();

//requiring the database
require("./config/database");

//require passport
require("./config/passport");

//Set Views
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "yaaassss",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Require Routes
const homeRouter = require("./routes/homescreen");
const drinksRouter = require("./routes/drinks");
const reviewsRouter = require("./routes/reviews");

//Mount Routes
app.use("/", homeRouter);
app.use("/drinks", drinksRouter);
app.use("/", reviewsRouter);

//App listen
app.listen(PORT, () => {
  console.log(`Express is listening at port ${PORT}`);
});
