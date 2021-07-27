// EXERCICIO 1
const assert = require('assert');

const addOne = (myArray) => {
  let storeArray = [];
  for(let index = 0; index < myArray.length; index +=1){
    storeArray.push(myArray[index] + 1);
  }
  return storeArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, expected, 'VAI DAR PAU');

//EXERCICIO 2

const assert = require('assert');

const wordLengths = (array) => {
let count = [];
  for (let index = 0; index < array.length; index+=1){
    count.push(array[index].length);
  }
  return count
}

const expected = [3, 6, 10, 5];
const words = ['sun', 'potato', 'roundabout', 'pizza'];
assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

//EXERCICIO 3

const assert = require('assert');

const sumAllNumbers = (array) => {
  let store = 0;
  for(let index = 0; index < array.length; index+=1){
    store = store + array[index];
  }
  return store;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

//EXERCICIO 4

const assert = require('assert');
const findTheNeedle = (array , string) => {
  let output = -1;
  for (const index in array ){
    if ( string === array[index]){
      output = Number(index);
    }
  }
  return output;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);


