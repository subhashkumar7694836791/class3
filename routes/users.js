var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/class3');
const userSchema=mongoose.Schema({
  username:String,
  contact:Number,
  email:String,
  image:String,
});
module.exports=mongoose.model('user',userSchema);
