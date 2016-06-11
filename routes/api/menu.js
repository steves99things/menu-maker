var express = require('express');
var router = express.Router();

var Menu = require('../../models/menu');



router.route('/')
  // create a menu
  .post(function(req, res) {
    var menu = new Menu();

    menu.name = req.body.name;
    menu.title = req.body.title;
    menu.subtitle = req.body.subtitle;
    menu.description = req.body.description;

    menu.save(function(err) {
      if (err)
        res.send(err);

    res.json({
      message: 'Menu created!'
    });

    });
  })

  // get all the menu menus
  .get(function(req, res) {
    Menu.find(function(err, menus) {
      if (err)
        res.send(err);

      res.json(menus);
    });
  });

router.route('/:menu_id')

  // get the menu Menu by Id
  .get(function(req, res) {
    Menu.findById(req.params.menu_id, function(err, menu) {
      if (err)
        res.send(err);

      res.json(menu);
    });
  })

  // update the Menu by id
  .put(function(req, res) {
    Menu.findById(req.params.menu_id, function(err, menu) {
      if (err)
        res.send(err);

      menu.name = req.body.name;
      menu.title = req.body.title;
      menu.subtitle = req.body.subtitle;
      menu.description = req.body.description;
      menu.order = req.body.order;
      menu.isActive = req.body.isActive;

      menu.save(function(err) {
        if (err)
          res.send(err)

        res.json({
          message: 'Menu updated!'
        });
      });
    });
  })

  // delete the menu Menu by id
  .delete(function(req, res) {
    Menu.remove({
      _id: req.params.menu_id
    }, function(err, menu) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted!'
      });
    });
  });


module.exports = router;


