const promise = new Promise((resolve, reject) => {

});

//

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

//

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

//

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

//

//const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

//

const fetch = require('node-fetch');

function verifiedFetch(url) {
   new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
       fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

//

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

//

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// PARA FIXAR:

// 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

// Um executado de modo assincrono ele não segue a ordem de execução do JS, ele é executado em uma 'area especial' enquanto outras requisições (códigos) sincronos são executados. A diferença é que o sincrono segue a ordem de execução.


// 2 - Quando você tem que enfileirar várias callbacks , que problema surge?

// Surge o problema chamado callback hell, que consiste em várias callbacks uma atrás da outra atrapalhando o entendimento do código.


// 3 - Por que as Promises são uma forma de se resolver esse problema?

// Pois as promises tem 'superpoderes' que são o .then() para tratar a continuação da execução e encadea ('chaining') um then() no outro que recebe como parametro a resposta do then() anterior. E ainda recebe o .catch() que serve para tratar o erro caso receba um. Porque ela é uma instrução assíncrona e faz o tratamento dos 3 casos que uma instrução assíncrona pode ter, Pending, Fulfilled e Rejected, de uma forma mais direta, evitando ter que tratar essas situações em cada callback.


// 4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

// Ao se comunicar com uma API, esta deve ser assincrona, para manter o nosso JS rodando outras funções enquanto espera uma resposta da API, caso não fosse assincrona para pegar informações da API eu poderia quebrar o fluxo de exucução do JS ou adicionar um DELAY desnecessário.


// 5 - Dada a resposta anterior, o que é fetch e para que ele serve?

// O fetch() serve para se comunicar com uma API qualquer e o fetch recebe como parametro a URL da api e um paramentro opcional que é um objeto contendo algumas informações sobre requisição de API.