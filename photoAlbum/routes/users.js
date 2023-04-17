var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0/photoalbum')
.then(function(){
  console.log('Database Connected')
})
.catch(function(e){
  console.log('ERROR 404')
})

let userSchema = mongoose.Schema({
  name: String,
  avatar: String
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = mongoose.model('photosEtc', userSchema)