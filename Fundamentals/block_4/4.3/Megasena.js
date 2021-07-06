let fruits = [3, 4, 1, 1, 1];
let soma = 0;

for (let i = 0; i < fruits.length; i += 1) {
    soma = soma + fruits[i]
}

if (soma > 15) {
    console.log(soma)
} else if (soma <= 15) {
    console.log('Valor menor que 16')
}


let numerosMegaSena = []

for (let i = 0; i < 6; i += 1) {
    numerosMegaSena[i] = Math.ceil(Math.random() * 60);
}

console.log(numerosMegaSena)

let turma14 = [25, 42, 18, 24, 9, 3]
let acertos = 0;
let erros = 0;

for (j = 0; j < turma14.length; j += 1) {
    for (let k = 0; k < numerosMegaSena.length; k += 1) {
        if (turma14[j] === numerosMegaSena[k]) {
            acertos = acertos + 1
        }
    }

}

console.log(acertos + ' acertos');




