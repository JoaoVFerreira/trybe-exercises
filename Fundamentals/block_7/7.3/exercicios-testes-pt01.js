// EXERCICIO 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, '4+5 é igual a 9');
assert.strictEqual(sum(0,0), 0, '0+0 é igual a 0');
assert.throws(() => {sum(4, '5');});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);
assert.strictEqual(sum(4, "5"), 5); 


// EXERCICIO 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof (myRemove), 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'AI NÃO REI, TENTA DNV');
const lista = [5, 6, 7, 8];
myRemove (lista, 5);
assert.deepStrictEqual(myRemove(lista, 5), [5, 6, 7, 8], 'PANE NO SISTEMA');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

// EXERCICIO 3

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1 ,2 ,3 ,4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const original = [5, 6, 7, 8];
myRemoveWithoutCopy (original, 6);
assert.deepStrictEqual(myRemoveWithoutCopy(original, 6), [5, 7, 8]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5) [1 ,2 ,3 ,4]);

//EXERCICIO 4

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'PANE NO SISTEMA');
assert.strictEqual(myFizzBuzz(6), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(7),7, 'ALGUEM ME DESCONFIGUROU');
assert.strictEqual(myFizzBuzz('jão'), false);

//EXERCICIO 5

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj3, 'SALVE TRIBO');
assert.notDeepStrictEqual(obj2,obj3);