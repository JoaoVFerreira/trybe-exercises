const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// EXERCICIO 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  let anoNasc = [];
  books.forEach((livro) => anoNasc.push(livro.author.birthYear));
  let soma = 0;
  for(i = 0; i < anoNasc.length; i+=1){
    for(j = 0; j < anoNasc.length; j+=1){
      if (anoNasc[i] === anoNasc[j]){
        soma +=1;
      } else {
        soma +=0;
      }
    }
  }
  if (soma >= anoNasc.length + 2){
    return false;
  } else {
    return true;
  }
}
console.log(authorUnique());

assert.strictEqual(authorUnique(), expectedResult);





/*function bora () {
  let numbers = [14 , 25, 32, 8, 9, 2, 5];
  let soma = 0
  for(i = 0; i < numbers.length; i+=1){
    for (j = 0; j < numbers.length; j+=1){
      if (numbers[i] === numbers[j]){
        soma = soma + 1;
      } else {
        soma = soma + 0;
      }
    }
  }
  if (soma >= numbers.length + 2){
    return true;
  } else {
    return false;
  }
}
console.log(bora())
console.log(anoNasc)*/