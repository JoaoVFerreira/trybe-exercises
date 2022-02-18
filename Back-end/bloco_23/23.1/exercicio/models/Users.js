const connection = require('./connection');


async function createUser(first_name, last_name, email, password) {

  const QUERY = 'INSERT INTO users (first_name, last_name, email, password) VALUES(?, ?, ?, ?);'

  const [ newUser ] = await connection.execute(QUERY, [first_name, last_name, email, password])

  return {
    id: newUser.insertId,
    first_name,
    last_name,
    email
  };
}

async function getAllUsers() {
  const QUERY = 'SELECT * FROM users;'

  const [ allUser ] = await connection.execute(QUERY)
  return allUser;
}

async function findById(id) {
  const QUERY = 'SELECT * FROM users WHERE id = ?;';

  const [ userById ] = await connection.execute(QUERY, [id])
  return userById;
}

async function updateUser(id, { first_name, last_name, email, password }) {
  const QUERY = 'UPDATE exercise_23_1.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'

  await connection.execute(QUERY, [first_name, last_name, email, password, id])

  const userWithPassword = await findById(id);
  if (!userWithPassword) return {}

  delete userWithPassword[0].password;
  return userWithPassword;
}

module.exports = {
  createUser,
  getAllUsers,
  findById,
  updateUser,
}