const mongoose = require("mongoose")
const plm = require('passport-local-mongoose')
mongoose.connect('mongodb://0.0.0.0/facebook');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String
});

userSchema.plugin(plm);
 
module.exports = mongoose.model('user', userSchema)