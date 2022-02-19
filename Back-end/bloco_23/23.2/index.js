require('dotenv').config() 
const express = require('express');
const bodyParser = require('body-parser');
const { ping } = require('./controllers/pingController');
const { getCep } = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/ping', ping)

app.get('/cep/:cep', getCep)

app.listen(PORT, () => console.log('Server is running'));
