const fs = require('fs').promises;

const path = './simpsons.json';
const pathFamily = './simpsonsFamily.json';

async function readCharacters(id) {

  const simpsons = await fs.readFile(path, 'utf-8')
  .then(data => JSON.parse(data))


  const simpsonChosen = simpsons.find((c) => Number(c.id) === id)
  
  
  if (!simpsonChosen) throw new Error('ID NÃO ENCONTRADO')
  

  return console.log(simpsonChosen);
}

// readCharacters(2)
  
async function deleteCharacters() {

  const simpsons = await fs.readFile(path, 'utf-8')
  .then(data => JSON.parse(data))

  const removeSimpson = simpsons
  .filter((simpson) => simpson.id !== '6' && simpson.id !== '10')

  
  await fs.writeFile(path, JSON.stringify(removeSimpson))

}

// deleteCharacters(3, 5)

async function createFile() {

  const simpsons = await fs.readFile(path, 'utf-8')
  .then(data => JSON.parse(data))

  const simpsonFamily = simpsons.filter((simpson) => [1, 2, 3, 4].includes(Number(simpson.id)))
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily))
}

// createFile()

async function addSimpson() {

  const simpsons = await fs.readFile(pathFamily, 'utf-8').then(data => JSON.parse(data))
  
  const newCharacterToFamily = new Array(simpsons, {"id": "5", "name": "Nelson Muntz" })

  
  await fs.writeFile(pathFamily, JSON.stringify(newCharacterToFamily))

}

addSimpson()