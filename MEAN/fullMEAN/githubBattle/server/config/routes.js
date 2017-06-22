
var mongoose = require ('mongoose')
var User = mongoose.model('User')
var users = require('../controllers/users.js');

module.exports = function(app){
  app.get('/users', function(req, res) {
      users.home(req,res)

  });

  app.post('/users', function(req, res) {
      console.log('in me rooots')
      users.create(req,res)
  });

  // app.get('/notes/new', function(req, res) {
  //       res.render('new');
  //     })

  //
  //
  //
  // app.get('/notes/:id', function(req, res){
  //   notes.remove(req,res)
  //
  // });
  //
  // app.get('/notes/edit/:id', function(req, res){
  //   notes.edit(req,res)
  // });
  //
  // app.post('/notes/:id', function(req, res){
  //   notes.update(req, res)
  // })
  //
  // app.delete('notes/:id', function(req, res){
  //   notes.delete(req,res)
  // })
  //

}
