function printRange(startpoint, endpoint, skipamount){
  for(x = startpoint; x < endpoint; x += skipamount){
    console.log(x)
  }
}
printRange(2,10,2);
