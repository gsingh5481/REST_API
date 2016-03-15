var model= require('../../../model/newModel');
module.exports = function(router){

  router.get('/f',function(req,res,next){
    model.showAllWithFunction(function(rows){
      res.json(rows);
      console.log(rows);
    });
  });

  router.get('/f/:name',function(req,res,next){
    model.SearchIdWithFunction(req.params.name , function(rows){
      res.json(rows);
    });
  });

}
