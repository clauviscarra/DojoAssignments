var listArray= function (arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

var push100 = function (arr, newarr){
  arr.push(100);
  arr.push.apply(arr,newarr);
  console.log(arr);

}
var sum500 = function (){
  var sum = 0

  for (var i = 0; i < 501; i++){
    sum += i;
  }
  console.log(sum);
}

var sumIntegers= function (x,y){
  var sum = 0
  if (x < y){
    for (var i = x; i <= y; i++){
      sum += i;
  }
  console.log('x < y', sum);
}
  else if (x > y){
    for (var i = x; i >= y; i--){
      sum += i;
  }
  console.log('x > y',sum);
  }

  else if (x = y){
    sum = 0
    console.log('x = y',sum);
  }

}

var returnMin= function (arr){
var min = 0

for(var i = 1; i < arr.length; i++){
  if (i < arr[i - 1]){
    min = arr[i]
  }
}

console.log(min);
}

var returnAvg = function (arr2){
  var sum2 = 0

  for (var z = 0; z < arr2.length; z++){
    sum2 += arr2[z];
  }
  console.log(sum2/arr2.length)

}



//----------------------------------------------

listArray([3, 5, "Dojo", "rocks", "Michael", "Sensei"]);
push100([3, 5, "Dojo", "rocks", "Michael", "Sensei"],["hello", "world", "JavaScript is Fun"]);
sum500();
sumIntegers(8,8);
returnMin([2,3,4,7,2,10]);
returnAvg([2,3,4,7]);
