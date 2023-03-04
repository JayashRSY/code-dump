const express = require("express");
const bodyParser = require("body-parser");
const { read } = require("fs");
const date = require(__dirname+"/date.js");

const app = express();

let items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    
    let day = date();
    res.render("list", {day: day, items: items});
});

app.post("/", function(req, res) {
    newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server running at port: 3000...");
});
