var express = require('express');

// this inherits the parameters from the full route
// including the menu item id
var router = express.Router({ mergeParams: true });
var MenuItemHelper = require('../helpers/menu-item-helper');

var MenuItem = require('../models/menu-item');

router.route('/')

  .post(function(req, res) {
    MenuItem.findById(req.params.menu_item_id, function(err, item) {
      if (err) throw err;

      var menuItem = MenuItemHelper.createItemPrice(item, req);
      menuItem.save(function(err) {
        if (err) throw err;

        res.redirect('./prices');
      });
    });
  })

  .get(function(req, res) {
    MenuItem.findById(req.params.menu_item_id, function(err, item) {
      if (err) throw err;

      renderItem(item);
    });
    
    function renderItem(item) {
      res.render('menu-item-prices', {
        title: item.name + ' Prices',
        formTitle: 'New Unit Price',
        item: item
      });
    }
  });


module.exports = router;