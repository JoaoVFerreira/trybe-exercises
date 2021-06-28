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

//EXERCICIO 2

/*const n = 5; 
let symbol = "*";
let armazenaValor = '';
let espaco = ' ';

for ( let i = 0; i < n; i+= 1){
    for ( let j = 0; j < n; j+= 1){
        armazenaValor = armazenaValor + espaco
    }/*

armazenaValor = armazenaValor + symbol
console.log(armazenaValor)
}

/*let n = 5;
let symbol = '*';
let espaço = '';
let armazenaValor = n;

for (let ilinha = 0; ilinha < n; ilinha+= 1){
    for (let icoluna = 0; icoluna <= n; icoluna=+1){
        if ( icoluna < armazenaValor) {
            espaço = espaço + ' ';
        } else {
            espaço = espaço + symbol
        }
    }

    console.log(espaço);
    espaço = '';
    armazenaValor -= 1;

};*/



/*let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
        if (columnIndex < inputPosition){
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};*/





/*let contador = 1;
while (contador <= 10) {
    console.log("Contator " + contador);
    contador = contador + 1;
}

for (let contador = 1; contador <= 10; contador += 1) {
    console.log('Contador' + contador);
}


for (let i = 200; i >= 100; i -= 1) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

let soma = 0;

for (let i = 0; i <= 1000; i += 1) {
    if (i % 4 === 0) {
        soma = soma + i

    }
}

console.log(soma)


let A = [1,2,4,5,6]
let B = [3,9,8,5,0,2]

let C = []


for( let i = 0; i < A.length; i+=1){
    for ( let x = 0; x < B.length; x+=1){
        if (B[x] === A[i]){
            C.push(B[x]);
        }
    }
}

console.log(C)*/


/*let aventureiro = '';

switch(aventureiro){
    case "Tunico":
        console.log('Mestre dos Magos')
        break;

    case "Cremoso":
        console.log('Cavaleiro Negro')
        break;

    case "Gordinho":
        console.log('Pirata')
        break;

    case "Lobo Solitário":
        console.log('Samurai')
        break;

    case "Ousado":
        console.log('Mago')
        break;

    case "Anjo Loiro":
        console.log('Clérigo')
        break;

    default:
        console.log('Não foi possivel encontrar um aventureiro com esse nome')
        
}*/

let facilitators = ['Silvia', 'Isa', 'Marina','Mica', 'Amanda','Karine']
let pessoa = 'Mica';
let presente = ''


for ( let i = 0; i < facilitators.length; i+= 1){
    if(pessoa === facilitators[i]){
        let presente = facilitators[i];
        
    } 
}

if (presente === pessoa){
    console.log('Mica está no array')
} else {
    console.log('Mica não está no array')
}



