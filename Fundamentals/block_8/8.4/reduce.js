const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result += number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result += number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


const collection = [1, 2, 3, 4, 5];

const testing = collection.reduce((result, accumulator) => result + accumulator)
console.log(testing);
const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113



const list1 = [5, 10, 15, 24, 5, 32]

function lookTheBigger(list) {
  let result = 0
  for (number of list) {
    number > result ? result = number : result
  }
  return result
}
console.log(lookTheBigger(list1))


const sum = (result, number) => number > result ? result = number : result
console.log(list1.reduce(sum, 100))

console.log(lookTheBiggerReduce(list1))


const list1 = [5, 10, 15, 24, 5, 32]

function oddNumber(list) {
  const pares = list.filter((number) => number % 2 === 0 ? number : false)
  return pares.reduce((result, number) => result += number)
}

console.log(oddNumber(list1))


const sumOdd = (result, number) => number % 2 === 0 ? result += number : result
console.log(list1.reduce(sumOdd, 0))

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];


const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia
}

const reportStudente = students => students.map((students) => ({
  name: students.nome,
  materia: students.materias.reduce(getBestClass).name
}));

console.log(reportStudente(estudantes))

//----------------------------EXEMPLOS ABAIXO ---------------------------------

let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  }
  else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});
console.log(quantidadeNomes);
// quantidade de nomes:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

var color1 = new String('green');
console.log(color1)
'length' in color1 // retorna true

//

var numeros = [10, 11, 12, 13, 14, 15, 16];
var total = numeros.reduce((acumulador, numero, indice, original) => {
  console.info(`${acumulador} total até o momento`);
  console.log(`${numero} valor atual`);
  console.log(`${indice} indice atual`);
  console.log(`${original} array original`);
  return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)

//

const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
  b.reduce((acumulador, elemento) => acumulador += elemento, 0))
console.log(ab);

//

animais = [
  {
    nome: 'Fumaça',
    idade: 3,
    tipo: 'ca'
  },
  {
    nome: 'Tobby',
    idade: 6,
    tipo: 'ca'
  },
  {
    nome: 'Laminha',
    idade: 1,
    tipo: 'gato'
  },
  {
    nome: 'Nutella',
    idade: 3,
    tipo: 'ca'
  },
];

//dogsAgeSum = animais.filter((animal) => animal.tipo === 'cao')
//.map((cao) => cao.idade *= 7)
//.reduce((total, cao) => total += cao)


dogsAgeSum = animais.reduce((total, elemento) => {
  if (elemento.tipo === 'cao') return total += (elemento.idade *= 7);
  else return total
}, 0);
console.log(dogsAgeSum);

//


const lista = [
  { id: 1, nome: "gol" },
  { id: 2, nome: "ferrari" },
  { id: 3, nome: "camaro" }
];
const callback = (acumulador, valor) => {
  acumulador[valor.id] = valor.nome
  return acumulador
};
const valorInicial = {};
const carrosIndexadosPorId = lista.reduce(callback, valorInicial);
console.log(carrosIndexadosPorId[2])

//camaro :)


//

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

function countLanguade(list) {
 return list.reduce((acc, curr) => {
    if (acc[curr.language]=== undefined) {
      acc[curr.language] = 1
    } else {
      acc[curr.language]++
    }
    return acc
  }, {})
}

console.log(countLanguade(list1))