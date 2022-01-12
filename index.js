//const { init } = require('express/lib/application');
const { prompt } = require('inquirer');
const db = require('./db');

init();

function init() {
    loadPrompts()
}

//inital program start prompts
function loadPrompts() {
    prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Welcome to book tracker! What would you like to do?',
            choices: [
                {
                    name: 'View all my books',
                    value: 'view_books'
                },
                {
                    name: 'Add a new book',
                    value: 'new_book'
                }
                // later -- add search for book by author and title
            ]
        }
    ])
    .then((res) => {
        let action = res.action
        switch(action) {
            case 'view_books' : viewBooks();
            break;
            case 'new_book' : addBook();
            break;
            case 'quit' : exitProgram();
            break;
        }
    })
};

//function to view books calls getAllBooks query function from ./db/index.js
function viewBooks() {
    db.getAllBooks()
    .then(([rows]) => {
        let books = rowsl
        console.log("\n");
        console.table(books);
    })
};

//function to end inquirer prompts
function exitProgram() {
    process.exit();
}