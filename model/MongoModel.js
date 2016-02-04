var monModel = require('./userModel');

exports.find = function(res){
  monModel.find({},function(err,data){
      res.send(data);
  });
}

exports.findByName = function(name1,res){
  monModel.find({name: name1}, function(err,data){
    res.send(data);
  })
}
