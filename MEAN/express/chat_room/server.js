var express = require("express");
var path = require("path");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index2");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var users = [];
var messages = []
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on("send_user_name", function (data){
    users.push({id:socket.id, name:data.user});
    console.log(data.user);
    console.log(users);
    var names_arr = users.map(function(x){return x.name})

    socket.emit('send_user_name', {current_user:users[users.length-1], all_users:names_arr})

    // var existing_users = data.name

  	})
    socket.on('send_message', function(data){
      var sender = users.find(function(x){
        return x.id == data.sender
      })
      data.sender = sender.name;
      console.log(data);
      io.emit('send_message', data)
    })
    socket.on('disconnect', function(){
      var index = users.findIndex(function(x){return x.id == socket.id});

      if(index){
      users.splice(index, 1);
      var names_arr = users.map(function(x){return x.name})

      io.emit('user_left', {users:users})

      }
    })
    })
