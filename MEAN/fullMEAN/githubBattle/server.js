var express = require('express');
//link between node & mongo
var mongoose = require('mongoose');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json()); //allows json to be received from the front end
app.use(bodyParser.urlencoded({ extended: true })); //you may not need this

app.use(express.static(path.join(__dirname, './public/dist')));


//ROUTES
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.get('*', function(req, res){
  res.redirect('/')
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
