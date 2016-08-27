var express = require('express');
var router = express.Router();
var User = require('../models/mahasiswa')

//router mengembalikan dua parameters
//pertama request = req
//kedua resonse = res

router.get('/insert', function (req, res){
  User //kalau di mysql ini namanya tabel
    .find({})//select untuk mysql
    .exec(function (err,mahasiswa) {
        res.render('insert', {data: mahasiswa})//render berfungsi untuk manggil file
    })

})
router.post('/insert', function (req, res){
  var name = req.body.name
  var age = req.body.age

  var newUser = new User({
    name: name,
    age:age
  })

  newUser.save(function(err,saveUser){//hasil setelah diinput dan hasil erorr
    var userId = saveUser._id
    res.redirect('/mahasiswa/insert')
  })
})

module.exports = router;
