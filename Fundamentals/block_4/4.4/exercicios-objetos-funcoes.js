
let player = {
 name :'Marta',
 lastName : 'Silva',
 age : 34,
 bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
 medals :{ 
     golden: 2, 
     silver: 3 }
     }
     

     console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem '+ player.age + 'anos')
     console.log('A jagadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo 6 vezes' + ' ' + player.bestInTheWorld)

     player['fullName'] = player.name + player.lastName
     console.log(player.fullName)



     let cars = ['Saab', 'Volvo', 'BMW'];

     for (let index in cars) {
       console.log(index, cars[index]);
     }

     let car = {
        type: 'Fiat',
        model: '500',
        color: 'white',
      };
      
      for (let index in car) {
        console.log( car[index]);
      }

      let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge' 
      };

      for ( let index in names){
          console.log('Olá', names[index])
      }


      let car = {
        model: 'A3 Sedan',
        manufacturer: 'Audi',
        year: 2020
      };

      for ( let index in car){
          console.log(index, car[index])
      }


      // Adição
let a = 5;
let b = 2;

a + b;

function soma (a ,b){
    console.log(a +b) ;
}
