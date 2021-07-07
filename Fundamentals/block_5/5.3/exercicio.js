function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// EXERCICIO 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let paiUL = document.querySelector('#days')
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let listItem = document.createElement('li');

    if (days === 24 || days === 31) {
      listItem.className = 'day holiday';
      listItem.innerText = days;
      paiUL.appendChild(listItem);

    } else if (days === 4 || days === 11 || days === 18) {
      listItem.className = 'day friday';
      listItem.innerText = days;
      paiUL.appendChild(listItem);

    } else if (days === 25) {
      listItem.className = 'day friday holiday';
      listItem.innerText = days;
      paiUL.appendChild(listItem);

    } else {
      listItem.className = 'day';
      listItem.innerText = days;
      paiUL.appendChild(listItem);
    }
  }
}

createDaysOfTheMonth();

// EXERCICIO 2

function createHoliday(buttonName) {
  let paiButton = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.id = 'btn-holiday';
  createButton.innerHTML = buttonName;
  paiButton.appendChild(createButton);

}
createHoliday('Feriados');

// ECERCICIO 3

function changeColor() {

  let getButton = document.querySelector('#btn-holiday');
  let classHolidays = document.querySelectorAll('.holiday');
  let cor = 'rgb(238,238,238)';
  let otherColor = 'red';

  getButton.addEventListener("click", function () {
    for (let index = 0; index < classHolidays.length; index += 1) {
      if (classHolidays[index].style.backgroundColor === otherColor) {
        classHolidays[index].style.backgroundColor = cor;
      } else {
        classHolidays[index].style.backgroundColor = otherColor;
      }
    }
  })
}

changeColor();

// EXERCICIO 4 

function createFridayButton(namedButton) {

  let dadButton = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = namedButton;
  dadButton.appendChild(fridayButton);

}

createFridayButton('Sexta-Feira');

// EXERCICIO 5

function createTextInFriday(diaSexta) {
  let classFriday = document.querySelectorAll('.friday');
  let sextaButton = document.querySelector('#btn-friday');
  let texto = 'BAILÃO';

  sextaButton.addEventListener("click", function () {
    for (let index = 0; index < classFriday.length; index += 1) {
      if (classFriday[index].innerHTML === texto) {
        classFriday[index].innerHTML = diaSexta[index];
      } else {
        classFriday[index].innerHTML = texto;
      }
    }
  })
}
let sextas = [4, 11, 18, 25];
createTextInFriday(sextas);

// EXERCICIO 6

