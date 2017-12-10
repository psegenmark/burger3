var connection = require("../config/connection.js");

var orm = {

    selectAll: function(res) {
        var queryString = "SELECT id, burger_name, devoured FROM burgers";
        connection.query(queryString, function(err, result) {
            console.log(result);
        return res.render("index", {result: result});
        });
        },
    addBurger: function(newBurger, res) {
        // INSERT INTO burgers (burger_name, devoured) VALUES ("chickin_burger", false);
        var query  = "INSERT INTO burgers (burger_name, devoured) VALUES ( ? , false)"
        //var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (" + newBurger + ", " + 0 + ")"
        connection.query(query, [newBurger], function(err, result){
            if (err) {
                throw err;
              }
              res.status(200).end();
        })
    },
    updateBurger: function (id, res) {
        //UPDATE burgers SET devoured=true WHERE id=1;
        var query = "UPDATE burgers SET devoured=true WHERE id=?"
        connection.query(query, [id], function(err, result){
            if (err) {
                throw err;
              }
              res.status(200).end();
        })
    }

    
};

    // selectWhere: function(tableInput, colToSearch, valOfCol, func) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    
    //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //       func();
    //       return result;
    //     });
    //   }






// to export orm
module.exports = orm;