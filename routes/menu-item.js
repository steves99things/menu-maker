var express = require('express');
var router = express.Router();

var MenuItem = require('../models/menu-item');
var MenuItemHelper = require('../helpers/menu-item-helper');

router.route('/')

  .post(function(req, res) {
    var menuItem = MenuItemHelper.createMenuItem(req);

    menuItem.save(function(err) {
      if (err) throw err;

      res.redirect('/menu-items');
    });
  })


  .get(function(req, res, next) {
    MenuItem.find({}, function(err, items) {
      if (err) throw err;

      showItems(items);
    });

    function showItems(items) {
      res.render('menu-items', {
        title: 'Menu Items',
        formTitle: 'Create Menu Item',
        items: items
      });
    }
  });

router.route('/edit/:menu_item_id')
  .post(function(req, res) {
    MenuItem.findById(req.params.menu_item_id, function(err, item) {
      if (err) throw err;

      var menuItem = MenuItemHelper.updateMenuItem(item, req);

      menuItem.save(function(err) {
        if (err) throw err;

        res.redirect('/menu-items');
      });
    });

  })
  .get(function(req,res) {

    MenuItem.findById(req.params.menu_item_id, function(err, item) {
      if (err) throw err;

      showItem(item);
    });

    function showItem(item) {
      res.render('edit-menu-items', {
        title: 'Menu Items',
        item: item,
        formTitle: 'Edit Menu Item: ' + item.name,
      });
    }
  });

router.route('/delete/:menu_item_id') 
  .get(function(req, res) {
    MenuItem.findByIdAndRemove(req.params.menu_item_id, function(err, item) {
      if (err) throw err;

      res.redirect('/menu-items');
    });
  });


module.exports = router;