var model = require('../../../model/newModel');

module.exports = function (router){

  router.get('/p', function(req,res,next){
    model.findAllWithPromise().then(function(rows){
       res.json(rows);
    });
  });

  router.get('/p/:name',function(req,res,next){
      model.findAllWithPromise(req.params.name).then(function(rows){
        res.json(rows);
      });
  });
}
