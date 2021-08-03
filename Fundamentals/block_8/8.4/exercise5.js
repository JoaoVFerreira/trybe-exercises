const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// JEITO CLEAN

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}


// MEU JEITO DE RESOLVER INICIAL 
function containsA() {
  let unique = names.reduce((acc, nome) => acc + nome, [])
  let arryUnique = unique.split('');
  let soma = 0;
  for( contar of arryUnique){
    contar === 'a' || contar === 'A' ? soma+=1 : soma
  }
  return soma;
}

console.log(containsA())

assert.deepStrictEqual(containsA(), 20);