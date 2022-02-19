const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;


const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});


async function getCep(value) {
  const QUERY = 'SELECT * FROM ceps WHERE cep = ?;'
  const [ cep ] = await connection.execute(QUERY, [value]);

  if (!cep.length) return null;

  return getNewCep(cep);
};


module.exports = {
  getCep
};