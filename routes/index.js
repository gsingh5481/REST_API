var express = require('express');
var router = express.Router();
var model = require('../model/models');

var users_model= require('../model/userModel')
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/testingMydb');
// var mdb = require('../config/mconfig');
// console.log(mdb);

/*var Schema = mongoose.Schema;
var myUser = new Schema({
  name: String,
  email: String
});
var users_model=mongoose.model('users', myUser);*/


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

  /*var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;*/
users_model.find({}, function(err,users){
  res.send(users);
});


});

module.exports = router;
