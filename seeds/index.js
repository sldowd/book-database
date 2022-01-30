//import user and book functions
const seedUsers = require('./user-seeds');
const seedBooks = require('./book-seeds')
//import sequelize connection to db
const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED ----\n');

    await seedUsers();
    console.log('\n---- USERS SEEDED ----\n');

    await seedBooks();
    console.log('\n---- BOOKS SEEDED ----\n');

    process.exit(0);
};

seedAll();
