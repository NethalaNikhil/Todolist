//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use("view-engine", "ejs"); 

app.get("/",function(req,res){
    var today = new Date();
    var day = today.getDay();
    var whichday = " ";
    switch (day)
    {
        case 1:
            whichday = "monday";    
        case 2:
            whichday = "tuesday";
        case 3:
            whichday = "wednesday";
        case 4:
            whichday = "thursday";
        case 5:
            whichday = "friday";
        case 6:
            whichday ="saturday";
        case 0:
            whichday ="sunday";
        
    }
    res.render("list",{day:whichday})
});

app.listen(3000,function(){
    console.log("Server started on port 3000")
})
