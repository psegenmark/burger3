var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;

  