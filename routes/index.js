var express = require('express');
var router = express.Router();
var model = require('../model/models');
var users_model= require('../model/userModel')


/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);
  // res.send(mdb.collection().find());

});
router.get('/insert/:name',function (req,res,next) {
  var id = req.params.name;
  model.SearchId(id,res);

});
router.post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

router.get('/m',function(req,res,next){
  users_model.find({}, function(err,users){
    res.send(users);
  });
});

router.get('/m/:name',function(req,res,next){
  var name1 = req.params.name;
   users_model.findOne({name: name1},function(err,user){
     res.send(user);
   });
});

module.exports = router;
