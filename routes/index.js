var express = require('express');
var router = express.Router();
var model = require('../model/models');
// var mdb = require('../config/mconfig');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testingMydb:27017');

// console.log(db);


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
  var myUser = mongoose.Schema();
  /*var myUser = mongoose.Schema({
      name: String,
      email: String
    });*/

var users = mongoose.model('users', myUser);
  users.find({},function(err,user){
    res.json(user);
  });
});

module.exports = router;
