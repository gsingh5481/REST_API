var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: String
});

mongoose.model('users',userSchema);
/*
    //to find all

    mongoose.model('uses',function(err,users){
    res.send(users);
  })
*/
