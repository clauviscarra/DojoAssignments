function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};

  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;

  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }

  return ninja;
}

var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();

var Michael = NinjaConstructor("Michael", 34, "Founder");
Michael.introduce();

var Claudia = NinjaConstructor("Claudia", 23, "Designer")

Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();

Claudia.introduce();
