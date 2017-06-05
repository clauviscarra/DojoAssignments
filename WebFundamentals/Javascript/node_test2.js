// for (i = 2; i < 2000; i = i*10){
//   if(i % 2 == 0){
//     console.log(i, "--> This is a pair!")
//   }
//
// }
//
// function Person(name){
//   this.name = name;
//   this.sayName = function(){
//     console.log('my name is', name);
//   }
// }
//
// var Clau = new Person('clau');
// var Roger = new Person('roger');
// var Shady = new Person('slim shady');
//
// Clau.sayName();
// Roger.sayName();
// Shady.sayName();

function NinjaConstructor(name, age, prevOccupation){
  var ninja = {}
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;

  ninja.introduce = function(){
    console.log('hi, my name is ' , ninja.name , '. I used to be a ' , ninja.prevOccupation , ' and now I am a ' , ninja.age , ' year old ninja!');
  }
  return ninja;
}

var Claudia = NinjaConstructor('Claudia', 23, 'graphic designer');
Claudia.introduce();
