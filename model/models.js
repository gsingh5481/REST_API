var conn = require('../config/database');
// conn.connect();

          //insert
exports.insert = function(name,email,res){
  var sql = "insert into users (name,email) values ( '" + name + "','" + email + "'); " ;
  conn.query(sql,function(err,rows,fields){
    if(err) throw err;
    res.send("created name: " + name + " email: " + email);
  });

}
    /*
    Get Request that finds all the info
    */
exports.show = function(res){
  var sql = "SELECT * FROM users";
  conn.query(sql, function(err,rows,fields){
    if (err) throw err;
    res.json(rows);
  });
}

        //search by name
exports.SearchId = function(id,res){
 var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
 conn.query(sql, function(err,rows,fields){
   if (err) throw err;``
   res.json(rows);
 });
}
  //remove by name
exports.removeByName = function(name1 , res){
  var sql = "DELETE FROM users where name =  '" + name1 + "' ";
  conn.query(sql, function(err , rows , fields){
    if (err) throw err;
    res.send("removed successfull");
  })
}
  //show all but with a twist with a callback function
exports.showAllWithFunction = function(callback){
  var sql = "SELECT * FROM users";
  conn.query(sql, function(err,rows,fields){
    if (err) throw err;
    callback(rows);
  });
}
  // find by name with callback twiat
exports.SearchIdWithFunction = function(id ,callback){
  var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
  conn.query(sql, function(err,rows,fields){
    if (err) throw err;
    callback(rows);
  });

}
exports.findAllWithPromise = function() {
  return new Promise(function(resolve, reject) {

    var sql = "SELECT * FROM users";
    conn.query(sql, function(err,rows,fields){
      if (err) reject(err);
      else resolve(rows);

    });
  });
}
