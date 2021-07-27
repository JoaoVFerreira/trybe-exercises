//const assert = require('assert'); // Sintaxe para incluir o módulo assert

//assert.strictEqual(50, 50); // Sem erros: 50 == 50
//assert.strictEqual(50, 70); // AssertionError: 50 == 70

//const assert = require('assert');

//function division(x, y) {
//  return x / y;
//}

//const expected = division(15, 3);

//assert.strictEqual(expected, 5, 'ERRROU TENTE NOVAMENTE!');

//const assert = require('assert');

//function add(a, b) {
//  return a + b;
//}

//const expected = add(1, 3);

//assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
//assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
//assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

/*const assert = require('assert');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 21 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');*/

/*const assert = require('assert');

const sub = (a,b) => a-b;

const expected = sub (4,2);

assert.ok(expected === 2, 'É FODA BIXO, BORA TENTA DNV');
assert.strictEqual(expected, 2, 'CE TA DOIDÃO');
assert.notStrictEqual(expected, 3, 'SAI FORA REI');*/

/*function division(x, y) {
  return x / y;
}

const assert = require('assert');

// declaração da função division, definida anteriormente...

//assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣*/

/*const assert = require('assert');
const { CONNREFUSED } = require('dns');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

//assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK*/


/*function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}
console.log(division (2,0));*/

const assert = require('assert');
function myFunction () {
  
}
assert.strictEqual(typeof myFunction, 'function');