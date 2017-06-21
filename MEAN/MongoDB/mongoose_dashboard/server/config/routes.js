var animals = require('../controllers/animals.js');

module.exports = function(app){
  app.get('/animals', function(req, res) {
      animals.showall(req,res)

  })

  app.get('/mongooses/new', function(req, res) {
        res.render('add_new');
      })


  app.post('/mongooses', function(req, res) {
      animals.create(req,res)
  });

  app.post('/mongooses/destroy/:id', function(req, res){
    animals.remove(req,res)

  });

  app.get('/mongooses/:id', function(req, res){
    animals.showone(req,res)
  });

  app.get('/mongooses/edit/:id', function(req, res){
    animals.gotoedit(req, res)
  })

  app.post('/mongooses/edit/:id', function(req, res){
    animals.edit(req,res)
  })

  // Setting our Server to Listen on Port: 8000


}
