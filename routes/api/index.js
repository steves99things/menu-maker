var express = require('express');
var router = express.Router();

var menuItem = require('./menu-item');
var menuCategory = require('./menu-category');
var menuSection = require('./menu-section');
var menu = require('./menu');

/* make sure the api is up and running. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'hooray! our api is working!'
  });
});

router.use('/menu-item', menuItem);
router.use('/menu-category', menuCategory);
router.use('/menu-section', menuSection);
router.use('/menu', menu);


module.exports = router;