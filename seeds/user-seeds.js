const { User } = require('../models');

const userData = [
    {
        username: 'sdowd',
        email: 'sarahlynnedowd@gmail.com',
        password: 'TestPassword123!'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;