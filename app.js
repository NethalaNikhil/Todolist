// app.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var day = today.getDay();
  var whichday = " ";
  switch (day) {
    case 1:
      whichday = "Monday";
      break;
    case 2:
      whichday = "Tuesday";
      break;
    case 3:
      whichday = "Wednesday";
      break;
    case 4:
      whichday = "Thursday";
      break;
    case 5:
      whichday = "Friday";
      break;
    case 6:
      whichday = "Saturday";
      break;
    case 0:
      whichday = "Sunday";
      break;
  }
  res.render("list", { Day: whichday });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

module.exports = router;
