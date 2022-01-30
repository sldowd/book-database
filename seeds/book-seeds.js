const { Book } = require('../models');

const bookData = [
    {
        title: 'Ham on Rye',
        author: 'Charles Bukowski',
        year_completed: 2008,
        user_id: 1
    },
    {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        year_completed: 2010,
        user_id: 1
    },
    {
        title: 'Slaughterhouse Five',
        author: 'Kurt Vonnegut',
        year_completed: 2006,
        user_id: 1
    }
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;