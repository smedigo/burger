// const util = require('util');
const mysql = require('mysql');

let connection;
// HEROKU connection
if ( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'tanya555',
    database: 'burgersDB'
});
};

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    console.log ("connect as id " + connection.threadId);
});


module.exports = connection;