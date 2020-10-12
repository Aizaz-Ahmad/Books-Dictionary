const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware

app.use(express.json())

//Routes
app.use('/books', require('./routes/getBooks'));
app.use('/books/add', require('./routes/addBook'))
app.use('/books/update', require('./routes/updateBook'))
app.use('/books/delete', require('./routes/deleteBook'))

app.listen(PORT, () => console.log(`Server Started at ${PORT}`))