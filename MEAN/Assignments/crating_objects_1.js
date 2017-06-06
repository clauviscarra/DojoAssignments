function VehicleConstructor(name, wheel_number, passenger_number) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheel_number = wheel_number;
  vehicle.passenger_number = passenger_number;

  vehicle.introduce = function() {
    console.log("This vehicle is a " + vehicle.name + ". It has " + vehicle.wheel_number + " wheels and holds " + vehicle.passenger_number + " passengers.");
  }
  if (vehicle.name == "sedan"){
  vehicle.makeNoise = function() {
  console.log('honk honk!');
    }
    }
  else if (vehicle.name == 'Bike'){
    vehicle.makeNoise = function(){
      console.log('ring, ring!');
    }
  }

  else if (vehicle.name == 'bus'){
    var passengers = 0;
    vehicle.getpassengers = function(){
      passengers += vehicle.passenger_number;
      console.log(passengers);
    }
  }
  else{
    vehicle.makeNoise = function(){
      console.log('vrooom');
    }
  }
  return vehicle;

    }

var Toyota = VehicleConstructor("Toyota", 4, 4);
Toyota.introduce();
Toyota.makeNoise();

var Bike = VehicleConstructor("Bike", 2, 4);
Bike.introduce();
Bike.makeNoise();

var sedan = VehicleConstructor("sedan", 4, 4);
sedan.introduce();
sedan.makeNoise();

var bus = VehicleConstructor("bus", 4, 20);
bus.introduce();
bus.getpassengers();
bus.getpassengers();
