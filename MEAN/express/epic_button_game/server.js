var express = require("express");
var path = require("path");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  count_number = 0;
 res.render("index");
})
// app.post('/', function(req, res) {
//   // var user_info =  {
//   //   name:req.body.name
//   //   location:req.body.location
//   //   language:req.body.language
//   //   comment:req.body.comment
//   // }
//  console.log("POST DATA", req.body);
//  res.redirect('/');
// })

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
var count_number = 0

io.sockets.on('connection', function (socket) {
  socket.on("posting_form", function (data){


        count_number += 1;

  		  socket.emit('updated_message', {response: data});
  			socket.emit('count_number', {response: count_number});
  		})
  	})
