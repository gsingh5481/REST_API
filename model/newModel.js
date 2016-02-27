// var conn = require('../config/database');
// conn.connect();

module.exports ={

  insert = function(name,email,res){
    var sql = "insert into users (name,email) values ( '" + name + "','" + email + "'); " ;
    conn.query(sql,function(err,rows,fields){
      if(err) throw err;
      res.send("created name: " + name + " email: " + email);
    });

  }


}
