// var db = require('mongodb').MongoClient;
/*var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
*/
/*var mdb = db.connect('mongodb://localhost:27017/testigMydb',function(err,db){
  if(err) throw err;
  // return db;
});*/

// var db = new Db('testingMydb',Server('localhost',27017));
// console.log(db);

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/testingMydb');



module.exports = db;
