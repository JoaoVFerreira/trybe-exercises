//let name = "JoãoFerreira"
//const birthCity = "Campinas"
//let birthYear = 1997

//console.log (name)
//console.log (birthCity)
//console.log (birthYear)

//birthYear = 2030

//console.log (birthYear)

//birthCity = "SãoPAulo"

//console.log (birthCity) 

/*let patientId = 50;
patientId = '50'
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

typeof patientEmail
typeof patientId 
typeof patientEmail 

console.log (typeof patientId)

const base = 5
const altura = 8
let area = base*altura
let perimetro = (base*2) + (altura*2)
console.log (perimetro)

let nota = 95

if(nota < 60) {
    console.log ("Reprovado nub")
}
else if ( nota >= 60 && nota < 80) {
    console.log ("Voce está na lista de espera!")
}
else {
    console.log ("Parabens, voce foi aprovado!")
}*/

let candidato = "reprovado"

switch(candidato) {
    case "aprovado":
        console.log("parabens");
        break;

    case "reprovado":
        console.log("Se danou");
        break;

    case "lista":
        console.log("Voce está na lista de  espera")
        break;

    default:
        console.log("Voce tá na Disney");
}