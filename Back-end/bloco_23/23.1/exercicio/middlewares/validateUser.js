const { isPasswordValid, isEmailValid, 
  isNameValid } = require('../services/validations');

function userResponse(req, res, next) {
  const { first_name, last_name, email, password} = req.body;

  if (!isNameValid(first_name, last_name)) {
    return res.status(400).json({
      error: true,
      message: "O campo 'name' tem dados inválidos" 
    })
  }

  if (!isEmailValid(email)) {
    return res.status(400).json({
      error: true,
      message: "O campo 'email' está inválido, o formato correto é email@email.com"
    })
  }

  if (!isPasswordValid(password)) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }

  next();
}
module.exports = {
  userResponse,
}