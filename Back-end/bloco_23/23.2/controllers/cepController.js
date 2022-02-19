// const { cepMessage } = require('../middlewares/cepMiddleware');
// const { getCep } = require('../models/cepModel');
const { isDataValid } = require('../services/cepValidation');

const getCep = async (req, res) => {
  const { cep } = req.params;
  
  const cepResult = await isDataValid(cep)

  if (cepResult.error) {
    return res.status(400).json(cepResult)
  }
  
  return res.status(200).json(cepResult);
}

module.exports = {
  getCep
}