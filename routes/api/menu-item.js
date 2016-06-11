var express = require('express');
var router = express.Router();

var MenuItem = require('../../models/menu-item');

var MenuItemHelper = require('../../helpers/menu-item-helper');


router.route('/')
  // create a menu item
  .post(function(req, res) {

    var menuItem = MenuItemHelper.createMenuItem(req);

    menuItem.save(function(err) {
      if (err)
        res.send(err);

    res.json({
      message: 'Menu Item created!'
    });

    });
  })

  // get all the menu items
  .get(function(req, res) {
    MenuItem.find(function(err, items) {
      if (err)
        res.send(err);

      res.json(items);
    });
  });

router.route('/:menu_item_id')

  // get the menu item by Id
  .get(function(req, res) {
    MenuItem.findById(req.params.menu_item_id, function(err, menuItem) {
      if (err)
        res.send(err);

      res.json(menuItem);
    });
  })

  // update the item by id
  .put(function(req, res) {
    MenuItem.findById(req.params.menu_item_id, function(err, menuItem) {
      if (err)
        res.send(err);

      menuItem = MenuItemHelper.updateMenuItem(menuItem, req);

      menuItem.save(function(err) {
        if (err)
          res.send(err)

        res.json({
          message: 'Item updated!'
        });
      });
    });
  })

  // delete the menu item by id
  .delete(function(req, res) {
    MenuItem.remove({
      _id: req.params.menu_item_id
    }, function(err, menuItem) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted!'
      });
    });
  });





module.exports = router;


