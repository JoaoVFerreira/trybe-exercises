const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'joaoferreira',
  password: '92459824',
  database: 'exercise_23_1',
  port: 3306
})

module.exports = connection;