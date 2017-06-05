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
