const User = require('./user');
const Book = require('./book')

//create associations
User.hasMany(Book, {
    foreignKey: 'user_id'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Book };