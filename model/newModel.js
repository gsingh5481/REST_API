var conn = require('../config/database');
conn.connect();

module.exports ={


  insert(name,email,res){
    var sql = "insert into users (name,email) values ( '" + name + "','" + email + "'); " ;
    conn.query(sql,function(err,rows,fields){
      if(err) throw err;
      res.send("created name: " + name + " email: " + email);
    });

  } ,

  show(res){
    var sql = "SELECT * FROM users";
    conn.query(sql, function(err,rows,fields){
      if (err) throw err;
      res.json(rows);
    });
  } ,

  SearchId(id,res){
   var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
   conn.query(sql, function(err,rows,fields){
     if (err) throw err;``
     res.json(rows);
   });
 } ,

  removeByName(name1 , res){
    var sql = "DELETE FROM users where name =  '" + name1 + "' ";
    conn.query(sql, function(err , rows , fields){
      if (err) throw err;
      res.send("removed successfull");
    })
  },
  showAllWithFunction(callback){
    var sql = "SELECT * FROM users";
    conn.query(sql, function(err,rows,fields){
      if (err) throw err;
      callback(rows);
    });
  },
    // find by name with callback twiat
  SearchIdWithFunction(id ,callback){
    var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
    conn.query(sql, function(err,rows,fields){
      if (err) throw err;
      callback(rows);
    });

  },
  findAllWithPromise(id) {
    return new Promise(function(resolve, reject) {

      var sql = "SELECT * FROM users where id = '" + id + "'";
      conn.query(sql, function(err,rows,fields){
        if (err) reject(err);

        else resolve(rows);

      });
    });
  },

  findIdwithPromisefunction(id){
    return new Promise(function(resolve,reject){
      var sql = "SELECT * FROM users WHERE name = '" + id + "' ";
      conn.query(sql, function(err,rows,fields){
        if
          (err) reject(err);
        else
          resolve(rows);
      });
    });
  }
}
