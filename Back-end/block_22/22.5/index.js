const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const utils = require('./middlewares/validate');


app.use(bodyParser.json());

app.listen(3000, console.log('Server is ONLINE'))


app.post('/user/register',
 utils.validUsername, 
 utils.validEmail, 
 utils.validPassword,
 (_req, res) => res.status(200).json({ message: 'user created'}))