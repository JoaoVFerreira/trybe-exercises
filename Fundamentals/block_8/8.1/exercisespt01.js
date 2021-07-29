//EXERCICIO 1 

const dataPerson = (nome) => {
  return obj = {
    name: nome,
    email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`,
  }
}
//console.log(dataPerson('joaoferreira'))
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(dataPerson));

//EXERCICIO 2 

const checkNumber = (number) => number === result ? 'Parabens voce ganhou!' : 'Tente novamente!';

const generateRandomNumber = (sorted, func) => {
  result = Math.round(Math.random(sorted) * 5);

  return func(4);
}

console.log(generateRandomNumber(5, checkNumber));

//EXERCICIO 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notaFinal = (gabarito, respostas, callback) => {
  let soma = 0
  for (i = 0; i < gabarito.length; i += 1) {
    const fazer = callback(gabarito[i], respostas[i])
    soma += fazer
  }
  return `Paraens voce acertou ${soma} pontos`;
}

console.log(notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, (gab, resp) => {
  if (gab === resp) {
    return 1
  } if (resp === 'N.A') {
    return 0
  } else {
    return -0.5
  }
}));


