// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

/*async function fetchPromise () {
  const promise = new Promise((resolve, reject) => {
    const arr = [];
    for (i = 0; i < 10; i += 1) {
      arr.push(Math.round(Math.random() * 50) + 1)
    }
    const sumSquares = arr.reduce((res, number) => res + Math.pow(number, 2), 0)

    sumSquares < 8000 ? resolve(sumSquares) : reject()
  });

  promise
    .then((sum) => [2,3,5,10].map((num) => Math.round(sum/num )))
    .then((somat => somat.reduce((res, number) => res + number)))
    .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};


fetchPromise();*/


const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.round(Math.random() * 50) + 1);

  const sum = myArray.map((number) => number * number)
    .reduce((res, curr) => res + curr);

  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
}

const sumArrayFromSum = (sum) => [2,3,5,10].map((number) => sum / number)
.reduce((res, acc) => res + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromsum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

fetchPromise();