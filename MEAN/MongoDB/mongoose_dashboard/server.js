var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ json}));

app.use(express.static(path.join(__dirname, './angularDemo/dist')));
// app.set('views', path.join(__dirname, './client/views'));

//ROUTES
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.get('*', function(req, res){
  res.sendfile(path.resolve("./dist/index.html"))

})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
