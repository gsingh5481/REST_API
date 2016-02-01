var express = require('express');
var model = require('../model/models');
var router = express.Router();
// conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);

}).get('/:name',function (req,res,next) {
  var id = res.params.name;
  model.SearchId(id,res)
  // var sql = "SELECT * FROM users WHERE name = '" + req.params.name + "' ";
  //   conn.query(sql , function(err,rows,fields){
  //     if(err) throw err;
  //     res.json(rows);
  //   });
}).post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

module.exports = router;
