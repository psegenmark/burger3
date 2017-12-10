var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");


var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burger_controller.js");
app.use(express.static("public"));

app.put("/api/burgers", function(req, res){

        orm.addBurger(req.body.burger_name, res);
    
    });

app.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    orm.updateBurger(id, res);

})


app.use("/", function (req, res){
    orm.selectAll(res);
    

});


app.listen(port);