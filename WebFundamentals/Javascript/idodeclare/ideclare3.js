var hour=8;
var minute=15;
var period="am";

if(minute<30 && !minute==15){
  if(period==="am"){
    console.log("It's just after "+hour+" in the morning.");
  }
  else if(period==="pm"){
    console.log("It's just after "+hour+"  in the evening.");
  }
}
else if(minute>=30 && !minute===45){
  if(period==="pm"){
    console.log("It is almost "+(hour+1)+" in the evening.");
  }
  else if(period="am"){
    console.log("It is almost "+(hour+1)+" in the morning.");
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
else if(minute===45){
  if(period==="am"){
    console.log("It is a quarter to "+(hour+1)+" in the morning");
  }
  else if(period==="pm"){
    console.log("It is a quarter to "+(hour+1)+" in the evening");
  }
}
