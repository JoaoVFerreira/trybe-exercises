const readline = require('readline-sync');

function velocidadeMedia() {

  const distancia = readline.questionInt('Qual a sua distancia percorrida? (em metros) ')
  const tempo = readline.questionInt('Quanto tempo ? (em segundos) ')

  const velocidade = distancia / tempo;

  return console.log(`A sua velocidade média é de ${velocidade} m/s`);
}

velocidadeMedia();