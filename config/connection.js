var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection("mysql://bb9e84d6de20b8:ad14a6a5@us-cdbr-iron-east-05.cleardb.net/heroku_7d10f2e6fa76b42?reconnect=true");

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;

  