

var hour=8;
var minute=30;
var period="am";

if(minute<30 && period==="am"){
    console.log("It's just after"+hour+"in the morning");
  }
  else(minute<30 && period==="pm"){
    console.log("It's just after"+hour+"in the evening");
  }

else if(minute>30 && period==="am"){
  console.log("It's just before"+hour+1+"in the morning");
}
  else if(minute>30 && period==="pm"){
    console.log("It's just before"+hour+1+"in the evening");
  }
