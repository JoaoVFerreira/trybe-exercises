
const { wordLengths, addOne, sumAllNumbers, findTheNeedle }  = require("./exercicios-testes-pt02")

describe("Funções referentes ao exercicio 2", () => {
  it('Conta o tamanho das palavras', () => {
    const words = ['sun', 'potato', 'roundabout', 'pizza']
    expect(wordLengths(words)).toEqual([3, 6, 10, 5])
  })
  
  it('Soma 1 em cada item do numérico do array', () => {
    const myArray = [31, 57, 12, 5];
    const resultado = [32, 58, 13, 6];
    expect(addOne(myArray)).toEqual(resultado)
  })
  
  it('Soma todos os itens do array', () => {
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    expect(sumAllNumbers(numbers)).toEqual(expected);
  })
  
  it('Econtre a agulha e retorne a sua posição', () => {
    const words = ['house', 'train', 'slide', 'needle', 'book'];
    const expected = 3;
    expect(findTheNeedle(words,'needle')).toEqual(expected)
  })
  
})
