// app.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["buy food"];
const router = express.Router();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  let today = new Date();
  let day = today.getDay();
  let options =
  {
    weekday:"long",//entire day of that week
    date:"numeric",
    month:"long"
  };

  let whichday = today.toLocaleDateString("en-US", options);
  res.render("list", { Day: whichday ,newListItems: items});
  

  // server handle post request
  app.post("/",function(req,res){
    let item = req.body.newItems;
    // console.log(item); to print in console
    items.push(item);

    res.redirect("/"); 

  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

module.exports = router;
