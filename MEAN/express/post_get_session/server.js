// this is the line that tells our server to use the "/static" folder for static content
var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
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
app.get('/users/:id', function (req, res){
  console.log('the user id is;', req.params.id);
  res.send('the user id is;', req.params.id);
});

app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

app.listen(8000, function(){
  console.log('listen on 8000');
})
