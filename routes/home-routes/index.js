const { User } = require('../../models');
const { Book } = require('../../models')

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('login')
});

router.get('/login', (req,res) => {
    res.render('login')
});

router.get('/signup', (req,res) => {
    res.render('signup')
});

router.get('/dashboard', (req,res) => {
    Book.findAll({
        attributes: [
            'title', 'author', 'year_completed'
        ],
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        console.log('book data:', dbBookData[0]);
        res.render('dashboard', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;