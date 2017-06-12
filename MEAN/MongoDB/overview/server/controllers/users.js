var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
  // two methods --> index and create
  index: function(req, res) {
    var users = User.find({}, function(err, data) {
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  create: function(req, res) {
    var user = new User({name:req.params.name});
    user.save(function(err, aUser) {
      if (err) {
        res.json(err);
      }else{
      res.json(aUser)}
    })
  },
  remove: function(req, res){
    var user = User.remove({name:req.params.name}, function(err, data){
      if(err){
        res.json(err);
      }
      res.json(data);
    });

    }
  }
