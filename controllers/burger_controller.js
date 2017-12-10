var express = require("express");
var app = express();

var burger = require("../models/burger.js");

app.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

