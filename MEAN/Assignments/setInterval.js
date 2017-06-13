function myOriginalFunction(){
  console.log('hello');
}

function invokedFunction(callback){
  var x = setInterval(function(){
    callback();
  }, 4000)
}

invokedFunction(myOriginalFunction);
invokedFunction(function(){console.log('world')});
// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
//
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
);

console.log("Printing ninja value.");
console.log(ninja, "NOW");