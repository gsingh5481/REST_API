var mongomodel= require('../../../model/MongoModel');

module.exports = function(router){

  router.get('/m',function(req,res,next){
    mongomodel.find(res);
  });

  router.get('/m/:name',function(req,res,next){
     mongomodel.findByName(req.params.name , res);
  });
  router.delete('/m/remove/:name',function(req,res,next){
    var name = req.params.name
    mongomodel.removeByName( name , res);
  });

  router.post('/m/insert', function(req,res){
    mongomodel.insertMongo(req.body.name , req.body.email,function(data){
      console.log(data);
    });
  });

}
