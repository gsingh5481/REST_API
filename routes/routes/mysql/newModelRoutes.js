var model = require('../../../model/newModel');

module.exports = function(router){

  router.get('/nm', function(req, res, next) {
  model.show(res);
  });

}
