let fruits = [3, 4, 1, 1, 1];
let soma = 0;

for (let i = 0; i < fruits.length; i += 1){
    soma = soma + fruits[i] 
}

if (soma > 15) {
    console.log(soma)
} else if ( soma <= 15) {
    console.log('Valor menor que 16')
}