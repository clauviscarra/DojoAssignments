var hour=8;
var minute=5;
var period="pm";

if(minute===5){
  if(period==="am"){
    console.log("It is five after " +hour+ " in the morning.");
  }
  else if(period==="pm"){
    console.log("It is five after " +hour+ " in the evening.");
  }
}
else if(minute===15){
  if(period==="am"){
    console.log("It is a quarter after " +hour+ " in the morning.");
  }
  else if(period==="pm"){
    console.log("It is a quarter after "+hour+" in the evening.");
  }
}
else if(minute===30){
  if(period==="am"){
    console.log("It is half past "+hour+" in the morning.");
  }
  else if(period==="pm"){
    console.log("It is half past "+hour+" in the evening.");
  }
}
