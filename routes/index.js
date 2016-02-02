var express = require('express');
var router = express.Router();
var model = require('../model/models');
var mdb = require('../config/mconfig');


/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);
  // res.send(mdb.collection().find());

});
router.get('/:name',function (req,res,next) {
  var id = req.params.name;
  model.SearchId(id,res);

});
router.post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

router.get('/m',function(req,res,next){
  var result=mdb.collection('users').find();
  res.send(result);
});

module.exports = router;
