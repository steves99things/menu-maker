var express = require('express');
var router = express.Router();

var MenuItem = require('../../models/menu-item');



router.route('/')
  // create a menu item
  .post(function(req, res) {
    var menuItem = new MenuItem();

    menuItem.name = req.body.name;
    menuItem.section = req.body.section;
    menuItem.description = req.body.description;
    menuItem.price = req.body.price;
    menuItem.unit = req.body.unit;
    menuItem.notes = req.body.notes;

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

      menuItem.name = req.body.name;
      menuItem.section = req.body.section;
      menuItem.description = req.body.description;
      menuItem.price = req.body.price;
      menuItem.unit = req.body.unit;
      menuItem.notes = req.body.notes;
      menuItem.order = req.body.order;
      menuItem.isActive = req.body.isActive;

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


