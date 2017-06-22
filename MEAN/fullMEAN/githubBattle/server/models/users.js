var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    login:{type:String, required:true, minLength:3},
    score:{type:Number},
    image:{type:String}

},{timestamps:true});

var User = mongoose.model('User', UsersSchema);
