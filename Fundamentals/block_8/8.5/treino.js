const list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function doIt(list) {
  return list.filter((lista) => {
    for (key in lista) {
      if (lista[key] == null) {
        lista.question = `Hi, could you please provide your ${key}.`;
        return lista
      }
    }
  })
}

console.log(doIt(list1))