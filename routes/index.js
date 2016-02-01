var express = require('express');
var model = require('../model/models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);

}).get('/:name',function (req,res,next) {
  var id = req.params.name;
  model.SearchId(id,res);

}).post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

module.exports = router;
