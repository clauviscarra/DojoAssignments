var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quotingDojo');
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
}, { timestamps: true })

var Quote = mongoose.model('quotes', QuoteSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//ROUTES
app.get('/', function(req, res) {
    res.render('index');
})
app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
      if(err){console.log(err);}
      res.redirect('/quotes');
    });
});
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
      if(err){console.log(err);}
      res.render('quotes', { quotes:quotes })
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
