var mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Password2020!',
        database: 'burgers_db'
    });
}

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;

    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;