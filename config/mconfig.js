var db = require('mongodb').MongoClient;

var mdb = db.connect('mongodb://ocalhost:27017/testigMydb',function(err,db){
  if(err) throw err;
  return db;
});


module.exports = mdb;
