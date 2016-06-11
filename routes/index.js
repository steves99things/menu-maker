var express = require('express');
var router = express.Router();

var menuItem = require('./menu-item');
var menuItemPrices = require('./menu-item-price');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/menu-items', menuItem);
router.use('/menu-items/edit/:menu_item_id/prices', menuItemPrices);

module.exports = router;
