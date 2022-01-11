const sqlite3 = require('sqlite3').verbose();

//connect to databse
let db = new sqlite3.Database('./db/books.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to books database')
})

module.exports = connection;
