const express = require('express')
const router = express.Router()
const books  = require('../Books')

router.get('/', (req, res) => {
    res.status(200).json(books);
})

router.get('/:name/:author', (req, res) => {
    let Bookname = req.params.name.toLowerCase()
    if(!Bookname)
        res.status(400).json({msg:"Must Contain the Name Parameter"})
    res.json(books.filter(book => book.name.toLowerCase().indexOf(Bookname) > -1))
})
module.exports = router;