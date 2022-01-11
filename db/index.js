const connection = require('./connection');

//create ES6 class
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    getAllBooks() {
        return this.connection.promise().query(
            "SELECT * FROM books"
        )
    }
    addBookEntry() {
        return this.connection.promise().query(
            `INSERT INTO books (title, author, year_finished, additional_info) VALUES ('${res.title}, '${res.author}', '${res.year}, ${res.info})`
        )
    }
    deleteEntry() {
        return this.connection.promise().query(
            
        )
    }
}

const db = new DB(connection);

module.exports = db;