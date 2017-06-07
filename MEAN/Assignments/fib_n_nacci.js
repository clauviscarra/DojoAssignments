function fib() {
  // Some variables here
 var previus = 0;
 var current = 1;
 function nacci() {
    // do something to those variables here
   console.log(current);
   var temp = previus; //0, 1, 1
   previus = current; //1, 1, 2
   current = current + temp; //1, 2, 3
 }
 return nacci
}
var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
