const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); 

//

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); 

//

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

//

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const pessoa = people.sort((a,b) => a.age - b.age);
console.log(pessoa);
const jhonson = (arr) => arr.sort((a,b) => b.age - a.age);
console.log(jhonson(people));


//const bora = people.age.sort((a,b) => a - b);
//console.log(bora);
/*const otra = (arr) => {
  let result;
  for( index in arr ){
   result = arr[index].sort((a,b) => a - b);
  } 
  return result;
}
console.log(otra(people));*/
/*const opa = Object.values(people);
console.log(opa);
const people01 = (arr, index) => arr[index].age.sort((a,b) => a - b);
console.log(people01(people, 1))
const person = people[0].age;
console.log(person);
const newPeople (arr, index) = people.age.sort((a,b) => a - b);
console.log(newPeople);

console.log(people);*/