// EXERCICIO 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos

const assert = require('assert');

// escreva sum abaixo

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0)


console.log(sum(5,7,8,9,10,45,14,12,14,12,1,45,5,5,5,56,1,554,5,4))

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);