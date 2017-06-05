var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"]
var newarray =  ["hello", "world", "JavaScript is Fun"]



for (var i = 0; i < x.length; i++){
  console.log(x[i]);
}

x.push(100)
x.push.apply(x,newarray);
console.log(x)

var sum = 0

for (var i = 0; i < 501; i++){
  sum += i;
  console.log(sum);
}

var min = 0
var arr = [1, 5, 90, 25, -3, 0]

for(var i = 1; i < arr.length; i++){
  if (i < arr[i - 1]){
    min = arr[i]
  }
}
console.log(min);


var sum2 = 0
var arr2 = [1, 5, 90, 25, -3, 0]

for (var z = 0; z < arr2.length; z++){
  sum2 += arr2[z];
  console.log(sum2/arr2.length)
}

var newNinja = {
name: 'Jessica',
profession: 'coder',
favorite_language: 'JavaScript', //like that's even a question!
dojo: 'Dallas'
}

for (var key in newNinja){
if (newNinja.hasOwnProperty(key)){
  console.log(key);
  console.log(newNinja[key]);
}
}
