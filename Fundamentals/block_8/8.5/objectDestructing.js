const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

//const { name } = product;
//console.log(name); // Smart TV Crystal UHD

//const { name, seller } = product;
//console.log(name); // Smart TV Crystal UHD
//console.log(seller); // Casas de Minas

//


const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


//

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const product2 = {
  name: 'PC Gamer',
  price: '5000',
  seller: 'Kabum'
}

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product2); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas