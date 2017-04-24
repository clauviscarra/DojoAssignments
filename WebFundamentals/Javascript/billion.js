function thirty(){
  var total = 0.01;

    for(x = 0; x < 30 ; x++){
      total *= 2;
    }
  console.log(total)
}
//thirty();
function thousands(){
  var days = 0;

    for(var x = 0.01; x <= 10000; x *= 2){
      days++;
    }
    console.log(days)
}
//thousands();

function billions(){
  var days = 0;

    for(var x = 0.01; x <= 1000000000; x *= 2){
      days++;
    }
    console.log(days);
}
billions();
