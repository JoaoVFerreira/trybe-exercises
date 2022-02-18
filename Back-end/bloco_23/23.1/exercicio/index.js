const express = require('express');
const bodyParser = require('body-parser');
const { createUser, getAllUsers, findById, updateUser } = require('./models/Users');
const { userResponse } = require('./middlewares/validateUser');

const app = express();

app.use(bodyParser.json());

app.listen(3000, console.log('Server is running'))


app.post('/user', userResponse, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const newUser = await createUser(first_name, last_name, email, password);

  return res.status(201).json(newUser);
})

app.get('/user', async (_req, res) => {
  const allUsers = await getAllUsers();

  if (allUsers.length === 0) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado'
    })
  }

  return res.status(200).end();
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const userById = await findById(id);

  if (userById.length === 0) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado'
    })
  }

  return res.status(200).json(userById);

})

app.put('/user/:id', userResponse, async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  
  const updatedUser = await updateUser(id ,{ first_name, last_name, email, password })

  if (updatedUser.length === 0) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado'
    })
  }

  return res.status(201).json(updatedUser);
})