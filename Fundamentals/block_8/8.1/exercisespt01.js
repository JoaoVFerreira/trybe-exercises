//EXERCICIO 1 

const dataPerson = (nome) => {
 return obj = {
    name: nome,
    email: `${nome}@trybe.com`,
  }
}
//console.log(dataPerson('joaoferreira'))
const newEmployees = (func) => {
  const employees = {
    id1: func('PedroGuerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('LuizaDrumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('CarlaPaiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(dataPerson));

//EXERCICIO 2 

const checkNumber = () => {
  if (3 === result){
    return 'Parabens voce ganhou'
  }
  return 'Tente novamente!';
}

const generateRandomNumber = (sorted,func) => {
 result = Math.random(sorted) * 5;
 result = Math.round(result);

 return func();
} 

console.log(generateRandomNumber(5, checkNumber));

//EXERCICIO 3
