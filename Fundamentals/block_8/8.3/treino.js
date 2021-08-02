let numeros = [5, 10, 8, 12]

function opa(integer) {
  let par = [];
  let impar = [];
  for (numero of integer) {
    numero % 2 === 0 ? par.push(numero) : impar.push(numero);
  }
  return par.length > impar.length ? Number(impar) : Number(par)
}

console.log(opa(numeros));

//

const soma = (a, b) => a === b ? a : a + b;
console.log(soma(-177, -380))

//

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }]

const exercicio1 = list1.filter((list) => list.language === 'JavaScript').length
console.log(exercicio1);

//

const exercicio2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function greetDevelopers(list) {
  list.map((names) => { names.greeting = `Hi ${names.firstName}, what do you like the most about ${names.language}?` }
  )
  return list;
}

console.log(greetDevelopers(exercicio2));



function greetDevelopers(list) {
  list.forEach(function (developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });

  return list;
}

//

const list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function isRubyComing(list) {
  return list.some((developer) => developer.language === 'Ruby');
}
console.log(isRubyComing(list1))

//

const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Py' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list) {
  if (list.find((developer) => developer.language === 'Python')) {
    let bora = list.find((developer) => (developer.language === 'Python'))
    let otra = Object.values(bora);
    return otra[0] + ',' + ' ' + otra[2]
  } else {
    return 'There will be no Python developers'
  }
}

console.log(getFirstPython(list1));
map((osso) => `${osso.firstName}, ${osso.country}`);

//

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];






const developer = [{ "firstName": "Mark", "lastName": "G.", "country": "Scotland", "continent": "Europe", "age": 22, "language": "JavaScript" }, { "firstName": "Victoria", "lastName": "T.", "country": "Puerto Rico", "continent": "Americas", "age": 30, "language": "Python" }, { "firstName": "Emma", "lastName": "B.", "country": "Norway", "continent": "Europe", "age": 19, "language": "Clojure" }]




function countLanguages(list) {
  let resultado = {
    C: list.filter((lista) => lista.language === 'C').length,
    JavaScript: list.filter((lista) => lista.language === 'JavaScript').length,
    Ruby: list.filter((lista) => lista.language === 'Ruby').length
  }
  return resultado;
}
console.log(countLanguages(developer));

//



const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

function isSameLanguage(list) {
  let xablau = list.map((developer) => developer.language)
  return xablau.every((xabla) => xabla === xablau[0])
}
console.log(isSameLanguage(list1));

//




const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 52, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 52, language: 'PHP' },
];



function findSenior(list) {
 return list.filter((developer) => developer.age === Math.max(...list.map((number) => number.age)))
}
console.log(findSenior(list1));


//


const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];



function creu (list) {
  let continentes = list.map((developer) => developer.continent );
  let notRepeated = new Set(continentes);
  return notRepeated.size !== 5 ? false : true;
}
console.log(creu(list1));

const allContinents = arr => new Set(arr.map(dev => dev.continent)).size === 5; // CURTI

console.log(allContinents(list1))


//



const list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 20, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 21, language: 'Python' },
];

function getAverageAge(list) {
  let count = 0;
  let bora = list.map((age) => age.age)
  bora.forEach((oloco) => count+=oloco);
  return Math.round(count / bora.length)
}

console.log(getAverageAge(list1));

//



const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

function addUsername(list) {
list.map((person) => {person.username = `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}${new Date().getFullYear()-person.age}`.replace(/\./g, "")})
return list;
}
console.log(addUsername(list1));


//

const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

function findAdmin(list, lang) {
 return list.filter((developer)=> developer.language === lang && developer.githubAdmin === 'yes')
}
console.log(findAdmin(list1,'JavaScript'))

//

//iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

//iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  let arr = numbers.split(' ');
  let pares = [];
  let impares = [];
  for(let i = 0; i < arr.length; i+=1){
    arr[i] % 2 === 0 ? pares.push(arr[i]) : impares.push(arr[i])
  }
  return pares.length < impares.length ? arr.indexOf(pares.toString())+1 : arr.indexOf(impares.toString())+1
}

console.log(iqTest("1 1 1 1 1 1 1 1 10 1"));



