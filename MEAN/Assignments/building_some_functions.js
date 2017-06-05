function runningLogger(){
  console.log('I am running!');
}


function multiplyByTen(a){
  var multiply = a * 10;
  console.log(multiply);

}

function stringReturnOne(){
  console.log('Hard coded string 1');
}

function stringReturnTwo(){
  console.log('Hard coded string 2');
}

function caller(f){
  if (typeof f === 'function'){
  return null
  }
  // else{
  //   console.log('This is not a function');
  // }
}

function myDoubleConsoleLog(a,b){
  if (typeof a === 'function' && typeof b === 'function'){
    console.log(a,b);
  }
  // else{
  //   console.log('Not functions');
  // }
}

function myFunction() {
    setTimeout(function(){ console.log('Hello');}, 3000);
}

function caller2(a){
  console.log('starting');
  setTimeout(function(){
    if (typeof a === 'function'){
      a();
      console.log('ending');
      return 'interesting'
    }
  }, 2000);

}



runningLogger();
multiplyByTen(5);
stringReturnOne();
stringReturnTwo();
caller(runningLogger());
myDoubleConsoleLog(4,3);
caller2(stringReturnOne);
