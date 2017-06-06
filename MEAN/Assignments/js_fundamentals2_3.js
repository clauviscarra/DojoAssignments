
    var personConstructor = {
      name:'Claudia',
      distance_traveled:0,
      say_name: function(){
        console.log(personConstructor.name);
      },
      say_something: function(phrase){
        console.log(`${personConstructor.name} says: ${phrase}`);
      },
      walk : function(){
        console.log(`${personConstructor.name} is walking`);
        personConstructor.distance_traveled += 3;
      },
      run : function(){
        console.log(`${personConstructor.name} is running`);
        personConstructor.distance_traveled += 10;
      },
      crawling : function(){
        console.log(`${personConstructor.name} is walking`);
        personConstructor.distance_traveled += 1;
      }
    }

personConstructor.walk();
personConstructor.walk();
personConstructor.run();
console.log(personConstructor.distance_traveled);
