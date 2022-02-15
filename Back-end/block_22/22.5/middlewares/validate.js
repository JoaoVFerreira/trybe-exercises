function validUsername(req, res, next) {
  
  const { username } = req.body;

  if(!username || username.length < 3) return res.status(400).json({ message: 'invalid data'})
  
  next()
}


function validEmail(req, res, next) {

  const { email } = req.body;

  if(!email || /^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'invalid data'})
  
  next()
}


function validPassword(req, res, next) {

  const { password } = req.body;

  if(!isNaN(password) && password.length > 3 && password.length <= 8) return res.status(201).json({ message: 'user created'})
  
  next()
}


module.exports = {
  validUsername,
  validEmail,
  validPassword
}