const readline = require('readline-sync')

function calculaImc () {
  const nome = readline.question('Qual é o seu nome meu consagrado ? ')
  const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
  const altura = readline.questionFloat('Qual a sua altura? (em cm) ');

   console.log(`Peso: ${peso}, Altura: ${altura}`);

   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

   switch (imc) {
     case imc < 18.5:
        console.log(`${nome} seu IMC é ${imc} e você está desnutrido vai comer`);
      break;
     case imc > 18.5 && imc < 24.9:
        console.log(`${nome} seu IMC é ${imc} e voce está avonts`);
     case imc > 25 && imc < 29.9:
        console.log(`${nome} seu IMC é ${imc} e voce tá gordo`);
     default:
      console.log(`${nome} seu IMC é ${imc} tá obeso vai correr cuzido`);
       break;
   }

}

calculaImc()