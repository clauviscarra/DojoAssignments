function VehicleConstructor(name, wheel_number, passenger_number, speed) {
  //PRIVATE
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += speed;
    // console.log(speed);

  }


  //PUBLIC
  this.name = name;
  this.wheel_number = wheel_number;
  this.passenger_number = passenger_number;
  this.speed = speed;

  this.introduce = function() {
    console.log("This vehicle is a " + this.name + ". It has " + this.wheel_number + " wheels and holds " + this.passenger_number + " passengers.");
  }

  this.makeNoise = function(){
    console.log('carnoiseljslkjfdlk')
  }
  if (this.name == "sedan"){
  this.makeNoise = function() {
  console.log('honk honk!');
    }
    }
  else if (this.name == 'Bike'){
    this.makeNoise = function(){
      console.log('ring, ring!');
    }
  }

  else if (this.name == 'bus'){
    var passengers = 0;
    this.getpassengers = function(){
      passengers += this.passenger_number;
      console.log(passengers);
    }
    this.makeNoise = function(){
      console.log('vrooom');
  }
}
  else{
    this.makeNoise = function(){
      console.log('vrooom');
    }
  }

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkmiles = function(){
    updateDistanceTravelled();
    console.log(distance_travelled);
  }

  }

var Toyota = new VehicleConstructor("Toyota", 4, 4, 20);
Toyota.introduce();
Toyota.makeNoise();

var Bike = new VehicleConstructor("Bike", 2, 4, 20);
Bike.introduce();
Bike.makeNoise();

var sedan = new VehicleConstructor("sedan", 4, 4, 80);
sedan.introduce();
sedan.move();

console.log('-----------');

var bus = new VehicleConstructor("bus", 4, 20, 20);
// bus.introduce();
// bus.getpassengers();
// bus.getpassengers();
// bus.makeNoise();
bus.move();
bus.move();
bus.move();
bus.move();
bus.checkmiles();
