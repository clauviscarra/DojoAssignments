function VehicleConstructor(name, wheel_number, passenger_number, speed) {
  //PRIVATE
  var self = this;
  var distance_travelled = 0;
  VehicleConstructor.prototype.updateDistanceTravelled = function(){
    distance_travelled += speed;
    // console.log(distance_travelled);

  }


  //PUBLIC
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  this.name = name;
  this.wheel_number = wheel_number;
  this.passenger_number = passenger_number;
  this.speed = speed;

  this.vin = createVin();

function createVin(){
  var vin = '';
  for (var i = 0; i < 17; i++ ){
    // Use Math.floor and Math.random to generate random index to access character from char string
    vin += chars[Math.floor(Math.random()*35)];
  }
  return vin;
}

  VehicleConstructor.prototype.introduce = function() {
    console.log("This vehicle is a " + this.name + ". It has " + this.wheel_number + " wheels and holds " + this.passenger_number + " passengers.");
    return this
  }

  VehicleConstructor.prototype.makeNoise = function(){
    console.log('carnoiseljslkjfdlk')
  }


  }
  if (this.name == "sedan"){
  VehicleConstructor.prototype.makeNoise = function() {
  console.log('honk honk!');
    }
    }
  else if (this.name == 'Bike'){
    VehicleConstructor.prototype.makeNoise = function(){
      console.log('ring, ring!');
    }
  }

  else if (this.name == 'bus'){
    var passengers = 0;
    VehicleConstructor.prototype.getpassengers = function(){
      passengers += this.passenger_number;
      console.log(passengers);
    }
    VehicleConstructor.prototype.makeNoise = function(){
      console.log('vrooom');
  }
}
  else{
    VehicleConstructor.prototype.makeNoise = function(){
      console.log('vrooom');
    }
  }

  VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
  }
  VehicleConstructor.prototype.checkmiles = function(){
    console.log(distance_travelled);
    return this;
  }

  }

var Toyota = new VehicleConstructor("Toyota", 4, 4, 20);
Toyota.introduce();
Toyota.makeNoise();


console.log('-----------');

var bus = new VehicleConstructor("bus", 4, 20, 20);


bus.move();
bus.checkmiles();
