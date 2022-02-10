const { expect } = require('chai');
const verifyNumber = require('./exercicio')
const writeToFile = require('./readFiles')
const { stub } = require('sinon')
const fs = require('fs')

describe('verify if', () => {

  it('is a function', () => {

    expect(verifyNumber).to.be.a('function')
  })

  it('return positive in case parameter greater than 0', () => {

    const result = verifyNumber(10)
    expect(result).to.be.equals('Positivo')
  })

  it('return negative in case parameter lesser than 0', () => {

    const result = verifyNumber(-5)
    expect(result).to.be.equals('Negativo')
  })

  it('return neutral in case parameter equal to 0', () => {

    const result = verifyNumber(0)
    expect(result).to.be.equals('Neutro')
  })

  it('return a message when the paremeter is not a number', () => {

    const result = verifyNumber('lucaotetudao')
    expect(result).to.be.equals('Input inválido')
  })
})

describe('Write a contente in a specific file', () => {

  before('', () => {
    stub(fs, 'writeFileSync')
  })
  
  after('', () => {
    fs.writeFileSync.restore();
  })

  it('should be a function', () => {
    expect(writeToFile).to.be.a('function')
  })

  it('the paremeter should be a string', () => {
    const result = writeToFile(45, 'salve')
    expect(result).to.be.equals('Dados inválidos')
  })

  it('should return the message OK', () => {
    const result = writeToFile('lucao', 'tetudao do caramba')
    expect(result).to.be.equals('OK')
    
  })
})