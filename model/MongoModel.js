var monModel = require('../config/userModel');

exports.find = function(res){
  monModel.find({},function(err,data){
      res.send(data);
  });
}

exports.findByName = function(name1,res){
  monModel.find({name: name1}, function(err,data){
    res.send(data);
  });
}

exports.removeByName = function(name1,res){
/*  monModel.remove({name : + name1}, function(err,data){
    if(err) throw err;
    console.log(data);
  });
*/
  monModel.where().findOneAndRemove({name:name1},function(err, data) {
    if(err) throw err;
    console.log(data);
  });


}

exports.insertMongo = function(name,email,callback){
  monModel.create({name: name , email: email},function(err,data){
      if(err) throw err;
      callback(data);
  });
}

/*
,function(err){
  // if(err) res.send(err);
  res.send(name1);
}
*/
