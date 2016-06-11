var express = require('express');
var router = express.Router();

var MenuCategory = require('../../models/menu-category');



router.route('/')
  // create a menuCategory
  .post(function(req, res) {
    var menuCategory = new MenuCategory();

    menuCategory.name = req.body.name;
    menuCategory.title = req.body.title;

    MenuCategory.save(function(err) {
      if (err)
        res.send(err);

    res.json({
      message: 'Menu Category created!'
    });

    });
  })

  // get all the menuCategory menuCategories
  .get(function(req, res) {
    MenuCategory.find(function(err, menuCategories) {
      if (err)
        res.send(err);

      res.json(menuCategories);
    });
  });

router.route('/:menu_category_id')

  // get the menuCategory MenuCategory by Id
  .get(function(req, res) {
    MenuCategory.findById(req.params.menu_category_id, function(err, menuCategory) {
      if (err)
        res.send(err);

      res.json(menuCategory);
    });
  })

  // update the MenuCategory by id
  .put(function(req, res) {
    MenuCategory.findById(req.params.menu_category_id, function(err, menuCategory) {
      if (err)
        res.send(err);

      menuCategory.name = req.body.name;
      menuCategory.title = req.body.title;
      menuCategory.order = req.body.order;
      menuCategory.isActive = req.body.isActive;

      MenuCategory.save(function(err) {
        if (err)
          res.send(err)

        res.json({
          message: 'Menu Category updated!'
        });
      });
    });
  })

  // delete the menuCategory MenuCategory by id
  .delete(function(req, res) {
    MenuCategory.remove({
      _id: req.params.menu_category_id
    }, function(err, menuCategory) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted!'
      });
    });
  });


module.exports = router;


