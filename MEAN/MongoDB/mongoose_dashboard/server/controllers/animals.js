var mongoose = require('mongoose');
var Animal = mongoose.model('animals');

module.exports = {
  showall: function(req, res){
    Animal.find({}, function(err, animals) {
      if(err){console.log(err);}
      res.json(animals)
    })
  },

  // create: function(req, res){
  //   Animal.create(req.body, function(err) {
  //     if(err){console.log(err);}
  //     res.redirect('/');
  //   });
  //
  // },
  //
  // remove: function (req, res){
  //   Animal.remove({_id:req.params.id}, function(err, result){
  //     if (err) {console.log(err);}
  //     res.redirect('/')
  //   })
  // },

  showone: function (req, res){
    Animal.find({_id:req.params.id}, function(err, animals){ if (err){console.log(err);} res.json(animals[0])
  })
},
  gotoedit: function (req, res){
    Animal.find({_id:req.params.id}, function(err,animals){if (err){console.log(err);} res.json(animals[0])
    })

  },

  // edit: function(req,res){
  //   Animal.update({_id:req.params.id}, req.body, function(err,animals){if (err){console.log(err);} res.redirect('/');
  //   })
  //   }
   }
