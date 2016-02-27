var model = require('../../../model/models');

module.exports = function (router){

  router.get('/p', function(req,res,next){
    model.findAllWithPromise().then(function(rows){
      res.json(rows);
    });
  });

}
