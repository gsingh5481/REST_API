var conn = require('../config/database');
conn.connect();

//insert
exports.insert = function(name,email,res){
  var sql = "insert into users (name,email) values ( '" + name + "','" + email + "'); " ;
  conn.query(sql,function(err,rows,fields){
    if(err) throw err;
    res.send("created name: " + name + " email: " + email);
  });

  conn.end(function(err){console.log("connection close mysql");});
}

// find all
exports.show = function(res){
  var sql = "SELECT * FROM users";
  conn.query(sql, function(err,rows,fields){
    if (err) throw err;
    res.json(rows);
  });
  conn.end(function(err) { console.log("connection ened show");});
}

//seearch by name
exports.SearchId = function(id,res){
 var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
 console.log(sql);
 conn.query(sql, function(err,rows,fields){
   if (err) throw err;
   res.json(rows);
 });
 conn.end(function(err) { console.log("connection ened show");});
}
