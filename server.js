const express = require("express");
const methodOverride = require("method-override");

const PORT = 3300;

const app = express();

//Set Views
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Mount Routes

//App listen
app.listen(PORT, () => {
  console.log(`Express is listening at port ${PORT}`);
});
