function sumNumbers(num1, num2, num3) {

  return new Promise((resolve, reject) => {
    if ( typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') 
     reject('Informe apenas números')

    const result = (num1 + num2) * num3 

    if (result < 50) return reject('Valor muito baixo')
    resolve(result)
  })

}


/*sumNumbers(10, '5', 3)
  .then(result => console.log(result))
  .catch(err => console.log(err))*/



function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {

  const numbers = Array.from({ length: 3 }).map(randomNumber);

  try {
    const result = await sumNumbers(...numbers)
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

callDoMath()