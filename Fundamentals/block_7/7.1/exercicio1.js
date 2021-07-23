/*const testingScope = (escopo) => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);


let oddsAndEvens = [13, 3, 4, 10, 7, 2];
let resultado;
const voltaArrayOrdernado = (array) => {
  resultado = array.sort(function (a, b){return a-b})
  return `Os numeros ${resultado} se encontram ordenados de forma crescente`;
}

console.log(voltaArrayOrdernado(oddsAndEvens)); 



const fatora = (numero) => {
  let contador = 1;
  for(let i = 1; i <= numero; i+=1){
    contador = contador * i;
  }
  return contador;
}

console.log(fatora(5));

const returnBiggerWord = (frase) => {
  let show = frase.split(" ");
  show.sort(function (a,b) {
    return b.length - a.length
  })
  return show[0];
}
console.log(returnBiggerWord("Sempre costurado com o bolso cheio de dinheiro"))*/

const getBtn = document.getElementById('btn');
let getInput = document.getElementById('att');
let contador = 0;

getBtn.addEventListener('click', () => getInput.innerHTML = contador += 1);