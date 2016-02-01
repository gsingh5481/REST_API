var conn = require('../config/database');
conn.connect();

exports.insert = function(name,email,res){
  var sql = "insert into users (name,email) values ( '" + name + "','" + email + "'); " ;
  conn.query(sql,function(err,rows,fields){
    if(err) throw err;
    res.send("created name: " + name + " email: " + email);
  });

  conn.end(function(err){console.log("connection close mysql");});
}

exports.show = function(res){
  var sql = "SELECT * FROM users";
  conn.query(sql, function(err,rows,fields){
    if (err) throw err;
    res.json(rows);
  });
  con.end(function(err) { console.log("connection ened show");});
}

exports.SearchId = function(id,res){
 var sql = "SELECT * FROM users where id = '" + id + "';";
 conn.query(sql, function(err,rows,fields){
   if (err) throw err;
   res.json(rows);
 });
 con.end(function(err) { console.log("connection ened show");});
}
