var model = require('../../../model/models')
module.exports = function(router){

  router.get('/', function(req, res, next) {
  model.show(res);
  // res.send(mdb.collection().find());
  });

  router.get('/search/:name',function (req,res,next) {
    var id = req.params.name;
    model.SearchId(id,res);

  });
  router.post('/insert',function(req,res,next){
    var name = req.body.name;
    var email = req.body.email;
    model.insert(name,email,res);

  });

  router.delete('/remove/:name',function(req , res, next){
    model.removeByName(req.params.name , res);
  });

}
//
//
