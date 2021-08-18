
const { it, expect } = require("@jest/globals");
const { greetPeople, removeVowels, greaterThanTen, secondThirdSmallest } = require("./exercicios-testes-pt03")

describe("Funções referentes ao exercicio 3", () => {

  it('Comprimento a pessoa qualquer', () => {
    const parameter = ['Irina', 'Ashleigh', 'Elsa'];
    const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
    expect(greetPeople(parameter)).toEqual(result)
  })

  it('Remove vogais e troca por numeros', () => {
    const parameter = 'Dayane';
    const result = 'D1y2n3';
    expect(removeVowels(parameter)).toEqual(result)
  })

  it('Retorna numeros de um array maior que 10', () => {
    const parameter = [4, 10, 32, 9, 21];
    const result = [32, 21];
    expect(greaterThanTen(parameter)).toEqual(result)
  })

  it('Retorna o segundo e o terceiro menor número de um array de numeros', () => {
    const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
    const result = [5, 6];
    expect(secondThirdSmallest(parameter)).toEqual(result)
  })
})