var mongoose = require('mongoose');
var User = mongoose.model('User');
//
module.exports = {
  home: function(req, res){
    User.find({}, function(err, user) {
      if(err){console.log(err);}
      res.json(user)
    })
  },
//
  create: function(req, res){

    User.findOne({login:req.body.login}, function (err, user){
      if (user){
        return res.json(user)
      }
      else { User.create(req.body, function(err, user) {
        if(err){console.log(err);}
        else{res.status(201).json(user)
        console.log("post controller")
      }

      });
    }


  })
},


  }
//   //
//   // remove: function (req, res){
//   //   Animal.remove({_id:req.params.id}, function(err, result){
//   //     if (err) {console.log(err);}
//   //     res.redirect('/')
//   //   })
//   // },
//
//   showone: function (req, res){
//     Animal.find({_id:req.params.id}, function(err, animals){ if (err){console.log(err);} res.json(animals[0])
//   })
// },
//   gotoedit: function (req, res){
//     Animal.find({_id:req.params.id}, function(err,animals){if (err){console.log(err);} res.json(animals[0])
//     })
//
//   },
//
//   // edit: function(req,res){
//   //   Animal.update({_id:req.params.id}, req.body, function(err,animals){if (err){console.log(err);} res.redirect('/');
//   //   })
//   //   }
