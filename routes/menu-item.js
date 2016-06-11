var express = require('express');
var router = express.Router();

var MenuItem = require('../models/menu-item');
var MenuItemHelper = require('../helpers/menu-item-helper');

router.route('/')

  .post(function(req, res) {
    var menuItem = MenuItemHelper.createMenuItem(req);

    menuItem.save(function(err) {
      if (err) throw err;

      res.redirect('/menu-item');
    });
  })


  .get(function(req, res) {
    MenuItem.find({}, function(err, items) {
      if (err) throw err;

      showItems(items);
    });

    function showItems(items) {
      res.render('menu-items', {
        title: 'Menu Items',
        items: items
      });
    }
  });

router.route('/edit:menu_item_id')
 .post(function(req, res) {

 });

module.exports = router;