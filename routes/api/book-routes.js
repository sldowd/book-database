const router = require('express').Router();
const { Book, User } = require('../../models');

router.get('/', (req,res) => {
    Book.findAll({
        attributes: ['id', 'title', 'author', 'year_completed'],
        order: [['year_completed', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.get('/:id', (req,res) => {
    Book.findOne({
        where: {
            id: req.id
        },
        attributes: ['id', 'title', 'author', 'year_completed'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBookData => {
        if(!dbBookData) {
            res.status(404).json({ message: 'Book not found'})
        } res.json(dbBookData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.post('/', (req,res) => {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        year_completed: req.body.year_completed,
        user_id: req.body.user_id
    })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    Book.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbBookData => {
        if(!dbBookData) {
            res.status(404).json({ message: 'Book not found'})
        } 
        res.json(dbBookData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.delete('/:id', (req ,res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBookData => {
        if(!dbBookData) {
            res.status(404).json({ message: 'Book not found'})
        } 
        res.json(dbBookData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

module.exports = router;