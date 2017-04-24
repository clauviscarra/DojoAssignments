function printRange(startpoint, endpoint, skipamount){

var x = 2;
  if (x > 0){
    for(var x = startpoint; x < endpoint; x += skipamount){
      console.log(x);
    }
  }

  else{
    for(var x = startpoint; x > endpoint; x += skipamount){
      console.log(x);
    }
  }
}
printRange(2,12,3);
