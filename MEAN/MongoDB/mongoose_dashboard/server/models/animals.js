var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    type: String,
    name: String,
    weight: Number,
});

var Animal = mongoose.model('animals', AnimalSchema);
