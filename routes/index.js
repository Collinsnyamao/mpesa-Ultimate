var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'M~Pesa API Ultimate', status: 'Connected' });
});

module.exports = router;
