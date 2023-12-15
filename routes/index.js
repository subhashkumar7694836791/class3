var express = require('express');
var router = express.Router();
var userModel=require('./users')
// // class 3 ye bataya gya tha ki 
// jab index ejs ka data dusre ejs 
// page ya rout per le jana ho to 
// iske liye views ke under two different
//  files create karte hai or fir index ejs
//   me form create karte hai or ose other
//    ejs me redirect kr dete hai or uski 
//    detail ko dynamicly form me diye name
//     ko likhte hai or show krbate hai other ejs page per
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/feed',function(req,res,next){
userModel.find().then(function(createUser){
  res.render('feed',{createUser})
})
});

router.post('/create',function(req,res,next){
  userModel.create({
      username:req.body.username,
      email:req.body.email,
      contact:req.body.contact,
      image:req.body.image,
  }).then(function(createUser){
    res.redirect('/feed')
  })
})
module.exports = router;
