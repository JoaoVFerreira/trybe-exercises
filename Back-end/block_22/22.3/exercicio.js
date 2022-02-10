
function verifyNumber (num) {
  if(typeof num !== 'number') return 'Input inválido'

  if(num > 0) return 'Positivo'
  if(num < 0) return 'Negativo'
  if(num == 0) return 'Neutro'
}


module.exports = verifyNumber;