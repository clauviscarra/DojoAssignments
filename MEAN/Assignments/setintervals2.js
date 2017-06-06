// var a = 2;
// var b = function() { console.log("something"); };
//
// function doSomething(x) {
//   console.log(typeof(x));
// }
//
// doSomething(a);
// doSomething(b);



// function doSomething(possibleCallback) {
//   if (typeof(possibleCallback) === 'function'){
//     console.log('possibleCallback is a callback!');
//     possibleCallback(); //we can invoke the callback!
//   }
//   else {
//     console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//   }
// }
// doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// doSomething('string');



function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " +sauce+ " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}

// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makeAlfredo));



// // This is a function that just prints the result of another list of instructions
// function printResult(doSomething) {
//  var result = doSomething();         // store the return value of the callback parameter
//  console.log(result);                // print the result!
// }
// printResult(function returnFive(){ return 5 })  // this should print "5"



// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// // call the each function
// each([1,2,3, 33, 4], function(num) { console.log((num + " I am from the callback!")); }) //so many alerts!
