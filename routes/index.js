var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome ....', tanggal: new Date() });
});

router.get('/test', (req, res, next) =>{//=> fungsinnya sama seperti function
  res.render('test');
});

module.exports = router;
