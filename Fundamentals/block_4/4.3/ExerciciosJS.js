// Qual a posição da rainha ?
// Qual a posição da peça ?
// Algo para guardar a posição da rainha se o ataque foi bem sucediso ou não


/*EXERCICIO 1 

let n = 5; 
let symbol = "*";
let armazenaValor = '';

for ( let i = 0; i < n; i+= 1){
armazenaValor = armazenaValor + symbol
}

for (let i = 0; i < n; i+= 1){
console.log(armazenaValor)
}*/

/*EXERCICIO 2

let n = 5; 
let symbol = "*";
let armazenaValor = '';

for ( let i = 0; i < n; i+= 1){
armazenaValor = armazenaValor + symbol
console.log(armazenaValor)
}*/ 

let espaço = ''
let n = 5;
let symbol = '*';
let armazenaValor = n

for ( let ilinha = 0; ilinha < n; ilinha+= 1){
    for ( let icoluna = 0; icoluna <= n; icoluna=+1){
        if ( icoluna < armazenaValor) {
            espaço = espaço + ' ';
        } else {
            espaço = espaço + symbol
        }
    }

    console.log(espaço);
    espaço = '';
    armazenaValor -= 1;

};










