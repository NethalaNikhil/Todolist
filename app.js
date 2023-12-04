// app.js
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
const items = ["buy food"];
const router = express.Router();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const whichday = date.getDay();
  res.render("list", { Day: whichday ,newListItems: items});
  

  // server handle post request
  app.post("/",function(req,res){
    const item = req.body.newItems;
    // console.log(item); to print in console
    items.push(item);

    res.redirect("/"); 
 
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

module.exports = router;
