

var hour=8;
var minute=30;
var period="am";

if(minute<30){
  if(period==="am"){
    console.log("It's just after"+hour+"in the morning");
  }
  else if(period==="pm"){
    console.log("It's just after "+hour+"  in the evening");
  }
}
else if(minute>=30){
  if(period==="am"){
    console.log("It's just before "+(hour+1)+" in the morning");
  }
  else if(period==="pm"){
    console.log("It's just after "+(hour+1)+" in the evening");
    }

}
