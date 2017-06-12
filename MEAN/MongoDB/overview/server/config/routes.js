var users = require('./../controllers/users.js');

module.exports = function(app){
  //Routes

  app.get('/', users.index);
  app.get('/new/:name', function(req,res){
    users.create(req,res)
  });
  app.get('/remove/:name', function(req, res){
    users.remove(req,res)
  })

}
