var hour=8;
var minute=20;
var period="am";

if(minute<30 && minute!=5 && minute!=15){
  if(period==="am"){
    console.log("It's just after "+hour+" in the morning.");
  }
  else{
    console.log("It's just after "+hour+" in the evening.");
  }
}
else if(minute>30){
  if(period==="am"){
    console.log("It's just before "+(hour+1)+" in the morning.");
  }
  else{
    console.log("It's just after "+(hour+1)+" in the evening.");
    }
}
if(minute===5){
  if(period==="am"){
    console.log("It is five after " +hour+ " in the morning.");
  }
  else{
    console.log("It is five after " +hour+ " in the evening.");
  }
}
else if(minute===15){
  if(period==="am"){
    console.log("It is a quarter after " +hour+ " in the morning.");
  }
  else{
    console.log("It is a quarter after "+hour+" in the evening.");
  }
}
else if(minute===30){
  if(period==="am"){
    console.log("It is half past "+hour+" in the morning.");
  }
  else{
    console.log("It is half past "+hour+" in the evening.");
  }
}
