var express = require('express');
const { route } = require('../app');
var router = express.Router();

let UserModal = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/post', function(req, res, next){
  res.render('post');
})

router.get('/review', function(req, res, next){
  UserModal.find()
  .then (function(data){
    res.render('review', {data})
  })
});

router.post('/submit', function(req, res){
  UserModal.create({
    gamename: req.body.gamename,
    review: req.body.review
  })
  .then(function(a){
    res.redirect('/review')
  })
})

router.get('/update/:id', function(req, res){
  UserModal.findOne({'_id': req.params.id})
  .then(function(game){
    res.render('update', {game})
  })
})

router.post('/update/:id', function(req, res){
  let updated = {
    gamename : req.body.gamename,
    review: req.body.review
  }
  UserModal.findOneAndUpdate({'_id':req.params.id}, {'$set': updated}, {require:true})
  .then(function(updatedData){
    res.redirect('/review')
  })
})

router.get('/delete/:id', function(req, res){
  UserModal.findOneAndDelete({_id: req.params.id})
  .then(function(){
    res.redirect('/review')
  })
})

module.exports = router; 