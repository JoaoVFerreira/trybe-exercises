//EXERCICIO 1

const assert = require('assert');

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


assert.strictEqual(typeof greetPeople, 'function');
//assert.deepStrictEqual(greetPeople(parameter), result, 'DEU ERRO PAI, VAI CONSERTAR A FUNÇÃO PREGUIÇOSO');
assert.deepStrictEqual(greetPeople(number),result2); //STRING NÃO ROLA APENAS ARRAY;

//EXERCICIO 2

const assert = require ('assert');

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

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.ok(typeof removeVowels === 'function');
assert.strictEqual(removeVowels(parameter), result);

//EXERCICIO 3