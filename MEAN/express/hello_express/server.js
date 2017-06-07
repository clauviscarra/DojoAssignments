
//terminal: go to each folder and install express via: npm install express
var express = require('express');

var app = express();

app.get('/', function(request,response){
  response.send('Hello sdf');
  console.log(request);
})

app.listen(8000, function(){
  console.log('listen on 8000');
})
