var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var AnimalSchema = new mongoose.Schema({
    type: String,
    name: String,
    weight: Number,
});

var Animal = mongoose.model('animals', AnimalSchema);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//ROUTES

app.get('/', function(req, res) {
    Animal.find({}, function(err, animals) {
      if(err){console.log(err);}
      res.render('index', { animals })
    })
})

app.get('/mongooses/new', function(req, res) {
      res.render('add_new');
    })


app.post('/mongooses', function(req, res) {
    Animal.create(req.body, function(err) {
      if(err){console.log(err);}
      res.redirect('/');
    });
});

app.post('/mongooses/destroy/:id', function(req, res){
  Animal.remove({_id:req.params.id}, function(err, result){
    if (err) {console.log(err);}
    res.redirect('/')
  })

});

app.get('/mongooses/:id', function(req, res){
  Animal.find({_id:req.params.id}, function(err, animals){ if (err){console.log(err);} res.render('show', {animals})
})
})

app.get('/mongooses/edit/:id', function(req, res){
Animal.find({_id:req.params.id}, function(err,animals){if (err){console.log(err);} res.render('edit', {animals})
})
})

app.post('/mongooses/edit/:id', function(req, res){
Animal.update({_id:req.params.id}, req.body, function(err,animals){if (err){console.log(err);} res.redirect('/');})
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
