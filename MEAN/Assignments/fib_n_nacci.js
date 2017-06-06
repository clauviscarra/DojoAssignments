function fib() {
  var fibi = 0;
  fibi ++// Some variables here
  function nacci() {
  var nacci = 0;
  nacci += fibi
  console.log(nacci);
  // do something to those variables here
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
