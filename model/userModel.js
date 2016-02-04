var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testingMydb');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('users',userSchema);
/*
  
  //to read file and laod it

  var fs = require('fs');

  fs.readdirSync(__dirname + '/models').forEach(function(filename){
  if (~filename.indexOf('.js'))  //dont have to do this, but to check this if
                                // the file is js, because this will load all files;
    require(__dirname + 'models' + filename);
});
*/
