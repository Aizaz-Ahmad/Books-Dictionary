const express = require('express')
const router = express.Router()
const books  = require('../Books');

router.post('/', (req, res) => {
    if(!req.body.name 
        || !req.body.author
        || !req.body.publishedDate)
        return res.status(400).json({error: "Must provide Complete Book Information"})
    const newBook = {
        id: parseInt(Math.random() *  10),
        name: req.body.name,
        author: req.body.author,
        publishedDate: req.body.publishedDate
    }
    books.push(newBook)
    res.status(200).json(books)
})

module.exports = router;