const mySQL = require("mysql");
require ('dotenv').config()
let connection;

if (process.env.JAWSDB_URL) {
    connection = mySQL.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASS,
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;