var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name:{type:String}
});
var User= mongoose.model('user', userSchema);
