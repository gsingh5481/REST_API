var express = require('express');
var router = express.Router();
var model = require('../model/models');
var mdb = require('../config/mconfig');


/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);
  // res.send(mdb.collection().find());

}).get('/:name',function (req,res,next) {
  var id = req.params.name;
  model.SearchId(id,res);

}).post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

module.exports = router;
