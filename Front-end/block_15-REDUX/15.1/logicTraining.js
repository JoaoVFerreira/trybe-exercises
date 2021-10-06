
function doSomething (number) {

 const numberzada = number.toString().split('')
 let result = []

 numberzada.forEach(element => {
   result.push(element * element)
 });
 return result.join('')
}

