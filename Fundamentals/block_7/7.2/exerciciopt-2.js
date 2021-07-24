const objectAssign = require("object-assign");

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EX 01
const addMorning = (obj, key, value) => {
  obj[key] = value;
};
addMorning(lesson2, 'turno', 'manha');

//EX 02
const listKeys = (obj) => {
  Object.keys(obj);
};
listKeys(lesson3);

//EX 03
const listWidth = (obj) => {
  Object.keys(obj).length;
}
listWidth(lesson3);

//EX 04
const listValue = (obj) => {
  Object.values(obj);
}
listValue(lesson3);

//EX 05
const allLesson = {};
Object.assign(allLesson, { lesson1, lesson2, lesson3 });

//EX 06
const AllStudents = (obj) => {
  let total = 0;
  let array = Object.values(obj);
  for (index in array) {
    total = total + array[index].numeroEstudantes
  }
}
AllStudents(allLesson);

//EX 07
const getValueNumber = (obj) => Object.values(obj)[0]
getValueNumber(lesson1);

//EX 08
const verifyObj = (obj, key, value) => {
  let isEqual = false;
  const verify = Object.entries(obj);
  for (index in verify) {
    if (verify[index][0] === key && verify[index][1] === value)
      isEqual = true;
  } return isEqual;
}

console.log(verifyObj(lesson3, 'turno', 'noite'));