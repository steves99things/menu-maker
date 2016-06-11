var express = require('express');
var router = express.Router();

var menuItem = require('./menu-item');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/menu-item', menuItem);

module.exports = router;
