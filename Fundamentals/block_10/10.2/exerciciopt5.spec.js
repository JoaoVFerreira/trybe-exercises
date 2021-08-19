const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const algo = Animals.find((anima) => anima.name === name)
      if (algo) {
        return resolve(algo);
      }
      
      return reject(new Error('Nenhum animal com esse nome!'))
    }, 100)
  })
);

const getAnimal = (name) => {
  new Promise((resolve, reject) => {
    const save = Animals.map((animal) => animal.name === name)
    if (save.length > 0) {
      return resolve(save)
    } else {
      return reject('Nenhum animal com esse nome!')
    }
  })
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});