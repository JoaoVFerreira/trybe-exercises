const { getCep } = require('../models/cepModel');

/*const isCepValid = cep => /^[0-9]{5}-[0-9]{3}$/.test(cep);

const isCepExists = async (cep) => {
  const myCep = await getCep(cep);

  if (!myCep.length) return false;
  return myCep;
};*/

const CEP_REGEX = /\d{5}-?\d{3}/;

const isDataValid = async (searchedCep) => {
  if (!CEP_REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cep = await getCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
};


module.exports = {
  isDataValid,
};
