// this is the line that tells our server to use the "/static" folder for static content
var express = require('express');

var bodyParser = require('body-parser');

var session = require('express-session');


var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (req, res){
  res.send('Hello Express');
});

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


app.post('/users', function (req, res){
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.listen(8000, function(){
  console.log('listen on 8000');
})
