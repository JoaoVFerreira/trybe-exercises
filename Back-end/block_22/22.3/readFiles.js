const fs = require('fs');


function writeToFile(arquivo, texto) {

  if(typeof arquivo !== 'string' || typeof texto !== 'string') return 'Dados inválidos';

  fs.writeFileSync(`${arquivo}.txt`, texto)

  return 'OK';

}


writeToFile('poema', 'Lucão tetudão, ser ou não ser, eis uma questão, que assombra uma geração')

module.exports = writeToFile; 