let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;
let posicaoPecaLinha = 5;
let posicaoPecaColuna= 4;

let ataqueBemSucedido = false;


if ( posicaoPecaLinha === posicaoRainhaLinha){
    ataqueBemSucedido = true;
    console.log('Ataque bem Sucedido na mesma linha')
}

if ( posicaoPecaColuna === posicaoRainhaColuna){
    ataqueBemSucedido = true;
    console.log('Ataque bem Sucedido na mesma coluna')
}

for ( let index = 1; index < 8; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaLinha - index;

    if( posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        ataqueBemSucedido = true;
        console.log('Ataque bem Sucedido na diagonal inferior esquerda')
    }
}

for ( let index = 1; index < 8; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaLinha - index;

    if( posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        ataqueBemSucedido = true;
        console.log('Ataque bem Sucedido na diagonal superior esquerda')
    }
}

for ( let index = 1; index < 8; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaLinha + index;

    if( posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        ataqueBemSucedido = true;
        console.log('Ataque bem Sucedido na diagonal inferior direita')
    }
}

for ( let index = 1; index < 8; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaLinha + index;

    if( posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        ataqueBemSucedido = true;
        console.log('Ataque bem Sucedido na diagonal superior direita')
    }
}