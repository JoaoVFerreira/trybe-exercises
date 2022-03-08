const express = require('express');
const bodyParser = require('body-parser');
const routerBooks = require('./src/controllers/booksController');

const app = express();

app.use(bodyParser.json());


app.listen(3000, () => {
  console.log('Running on port 3000');
});

app.use('/book', routerBooks);

module.exports = app;