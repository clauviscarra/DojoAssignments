//Print 1-255
function print1to255(){

  var arr=[];
    for(var i=1;i<256;i++){
      arr.push(i)
    }
  console.log (arr);
}
//print1to255();

//Sum of even numbers from 1-1000
function sum_even_numbers(){
    var sum = 0;
        for(var i=1;i<1001;i++){
           if(i % 2===0){
               sum+=i;
           }
        }
    return sum;
}
