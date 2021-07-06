/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente : 'Sim',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  }

  //console.log('Bem vinda', info.personagem,)

  //info['recorrente'] = 'Sim'
  //info2['recorrente'] = 'Sim'
  //console.log(info.recorrente)

  for (index in info, info2){
      if (info[index] === info2[index]){
          console.log('ambos recorrentes')
      } else {
          console.log(info[index] + ' e ' + info2[index])
      }

  }*/
  

let palindromo = true;
let armazenaPalavra = '';

function verificaPalindrome (palavra) {
for ( let index = palavra.length - 1; index >= 0; index -= 1){
    armazenaPalavra += palavra[index];
}
if (armazenaPalavra === palavra){
    palindromo = true;
} else {
    palindromo = false;
}
return palindromo;
}

console.log(verificaPalindrome('dudu'));


