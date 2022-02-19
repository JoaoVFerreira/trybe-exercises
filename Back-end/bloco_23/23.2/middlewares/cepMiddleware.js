const { isCepValid } = require('../services/cepValidation');

async function cepMessage(req, res, next) {
  const { cep } = req.params;

  if (!isCepValid(cep)) {
    return res.status(400).json({
      error: {
        code: 'invalidData',
        message: 'CEP inválido'
      }
    });
  }
  next();
};

module.exports = {
  cepMessage
};