const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

// create an array
let books = [
    {
        id: 1,
        title: "The rich man",
        author: "Suneel",
        price: 15.99,
    },
    {
        id: 2, 
        title: "The poor man",
        author: "Sai",
        price: 13.99,
    },
    {
        id: 3, 
        title: "The Middle man",
        author: "Dilip",
        price: 99.99,
    },
];

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Welcome to the book cart API")
});

app.get('/books', (req, res) =>{
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId)

    if(!book)
        res.status(400).json({error: 'Book not found'})
    else
        res.json(book)
});

app.post('/books', (req, res) => {
    const newBookId = req.body;
    newBookId.id = books.length + 1;
    books.push(newBookId);
    res.status(201).json(newBookId);
});

app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(b => b.id === bookId);

    if(index == -1)
        res.status(404).json({error: 'Book Not found'});
    else{
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.json({message: "Book Deleted Succesfully"});
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});

