/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Rodando na 3000'))

app.get('/ping', (req, res) => {

  return res.status(200).json({ message: 'pong'})
})

app.post('/hello', (req, res) => {

  const { name } = req.body;
  return res.status(201).json({ message : `Hello ${name}`})
})

app.post('/greetings', (req, res) => {

  const { name, age } = req.body;

  if(age > 17) {
    return res.status(200).json({ message: `Hello ${name}`})
  }

  return res.status(401).json({ message: 'Unauthorized'})
})

app.put('/users/:name/:age', (req, res) => {

  const { name, age } = req.params;

  return res.status(200).json({
    message: `Seu nome é ${name} e você tem ${age} anos`
  })
})*/


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const simpsonsUtils = require('./utils');
const crypto = require('crypto');


function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}


function authMiddleWare(req, res, next) {

  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
  
}

app.use(authMiddleWare)

app.listen(3000, () => console.log('READY TO WORK'))

app.use((err, _req, res, _next) => {
  res.status(500).send(`Deu ruim! Mensagem: ${err.message}`);
});

app.use(bodyParser.json());

app.get('/simpsons', async(_req, res) => {

  const simpsons = await simpsonsUtils.getSimpsons();

  return res.status(200).json(simpsons);

})

app.get('/simpsons/:id', async (req, res) => {

  const { id } = req.params

  const simpson = await simpsonsUtils.getSimpsons()

  const uniqueSimpson = simpson.find((simp) => Number(simp.id) === Number(id))
    
  if(!uniqueSimpson) return res.status(404).json({ message: 'Simpson not found'})

  return res.status(200).json(uniqueSimpson);

})


app.post('/simpsons', async (req, res) => {

  const simpson = await simpsonsUtils.getSimpsons();

  const { id, name } = req.body;

  const verifyID = simpson.find((simp) => Number(simp.id) === Number(id))

  if (verifyID) return res.status(409).json({ message: 'ID already exists'})

  const addSimpson = [...simpson, {id, name}]

  simpsonsUtils.setSimpsons(addSimpson)

  return res.status(204).end();
})

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = generateToken()

  res.status(200).json({ token });
})

