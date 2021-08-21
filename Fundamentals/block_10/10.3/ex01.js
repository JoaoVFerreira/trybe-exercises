function randomNumber () {
  return Math.round(Math.random() * 100) + 1
}

console.log(randomNumber());

module.exports = { randomNumber }