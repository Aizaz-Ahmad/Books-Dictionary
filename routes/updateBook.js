const router = require("express").Router();
const books = require('../Books')

router.put('/:id', (req, res) => {
    let bookId = parseInt(req.params.id)
    if(!bookId)
        return res.status(400).json({error : "Missing book ID"})
    if(!req.body.name && ! req.body.author && ! req.body.publishedDate)
        return res.status(400).json({error : "Must Provide the Detail to Update Book"})
    if(!books.some(book => book.id === bookId))
        return res.status(404).json({error : "No Book With this ID found"})
    books.forEach(book => {
        if(book.id == bookId){
            book.name = req.body.name
            book.author = req.body.author
            book.publishedDate = req.body.publishedDate
        return res.status(200).json(books)
        }
    })
} )

module.exports = router