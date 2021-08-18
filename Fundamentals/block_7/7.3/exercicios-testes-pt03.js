//EXERCICIO 1

// const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let teste = [];
  //if ( people !== 'array' || people !== 'string'){
  //  throw new Error('FORMATO NÃO VÁLIDO');
  //}

  for (const person in people) {
    teste.push(greeting + people[person]);
  }
  return teste;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//const number = 'Jorges';
//const result2 = ['Hello Jorges'];


 //assert.strictEqual(typeof greetPeople, 'function');
 //assert.deepStrictEqual(greetPeople(parameter), result, 'DEU ERRO PAI, VAI CONSERTAR A FUNÇÃO PREGUIÇOSO');
 //assert.deepStrictEqual(greetPeople(number),result2); //STRING NÃO ROLA APENAS ARRAY;

//EXERCICIO 2

// const assert = require ('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count += 1;
      results.push(count);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.ok(typeof removeVowels === 'function');
// assert.strictEqual(removeVowels(parameter), result);

//EXERCICIO 3

// const assert = require ('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

// const parameter = [4, 10, 32, 9, 21];
 //const result = [32, 21];

/* assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);
const result2 = [32, 21, 15];
assert.notDeepStrictEqual(greaterThanTen(parameter), result2 , 'VAI DAR PAU, SE ELES FOREM IGUAIS');
assert.deepStrictEqual(greaterThanTen(parameter), result, 'VAI DAR PAU,SE ELES FOREM DIFERENTES');*/


//EXERCICIO 4

// onst assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

// const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// const result = [5, 6];

/* assert.ok(typeof secondThirdSmallest === 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);*/

module.exports = {greetPeople, removeVowels, greaterThanTen, secondThirdSmallest}