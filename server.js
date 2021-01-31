const express = require("express");
const methodOverride = require("method-override");

const PORT = 3300;

const app = express();

//Require Routes
const homeRouter = require("./routes/homescreen");
const drinksRouter = require("./routes/drinks");

//Set Views
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Mount Routes
app.use("/", homeRouter);
app.use("/drinks", drinksRouter);

//App listen
app.listen(PORT, () => {
  console.log(`Express is listening at port ${PORT}`);
});
