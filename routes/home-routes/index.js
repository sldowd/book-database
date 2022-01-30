const { User } = require('../../models');
const { Book } = require('../../models')

const router = require('express').Router();

router.get('/', (req,res) => {
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
        res.render('dashboard', dbBookData[0]);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;