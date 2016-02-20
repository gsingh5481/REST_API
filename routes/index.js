var express = require('express');
var router = express.Router();
var model = require('../model/models');
var mongomodel= require('../model/MongoModel')


/* GET home page. */
router.get('/', function(req, res, next) {
  model.show(res);
  // res.send(mdb.collection().find());
});


router.get('/search/:name',function (req,res,next) {
  var id = req.params.name;
  model.SearchId(id,res);

});
router.post('/insert',function(req,res,next){
  var name = req.body.name;
  var email = req.body.email;
  model.insert(name,email,res);

});

router.delete('/remove/:name',function(req , res, next){
  model.removeByName(req.params.name , res);
})

router.get('/m',function(req,res,next){
  mongomodel.find(res);
});

router.get('/m/:name',function(req,res,next){
   mongomodel.findByName(req.params.name , res);
});
router.delete('/m/remove/:name',function(req,res,next){
  var name = req.params.name
  mongomodel.removeByName( name , res);
});

router.post('/m/insert', function(req,res){
  mongomodel.insertMongo(req.body.name , req.body.email,function(data){
    console.log(data);
  });
});

router.get('/f',function(req,res,next){
  model.showAllWithFunction(function(rows){
    res.json(rows);
    console.log(rows);
  });
});

router.get('/f/:name',function(req,res,next){
  model.SearchIdWithFunction(req.params.name , function(rows){
    res.json(rows);
  });
});

router.get('/p', function(req,res,next){
  model.findAllWithPromise().then(function(rows){
    res.json(rows);
  });

});




module.exports = router;
