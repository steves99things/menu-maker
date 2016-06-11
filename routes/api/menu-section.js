var express = require('express');
var router = express.Router();

var MenuSection = require('../../models/menu-section');



router.route('/')
  // create a menu section
  .post(function(req, res) {
    var menuSection = new MenuSection();

    menuSection.title = req.body.title;
    menuSection.subtitle = req.body.subtitle;
    menuSection.description = req.body.description;

    menuSection.save(function(err) {
      if (err)
        res.send(err);

    res.json({
      message: 'Menu section created!'
    });

    });
  })

  // get all the menu sections
  .get(function(req, res) {
    MenuSection.find(function(err, sections) {
      if (err)
        res.send(err);

      res.json(sections);
    });
  });

router.route('/:menu_section_id')

  // get the menu section by Id
  .get(function(req, res) {
    MenuSection.findById(req.params.menu_section_id, function(err, menuSection) {
      if (err)
        res.send(err);

      res.json(menuSection);
    });
  })

  // update the section by id
  .put(function(req, res) {
    MenuSection.findById(req.params.menu_section_id, function(err, menuSection) {
      if (err)
        res.send(err);

      menuSection.title = req.body.title;
      menuSection.subtitle = req.body.subtitle;
      menuSection.description = req.body.description;
      menusection.order = req.body.order;
      menusection.isActive = req.body.isActive;

      menuSection.save(function(err) {
        if (err)
          res.send(err)

        res.json({
          message: 'Section updated!'
        });
      });
    });
  })

  // delete the menu section by id
  .delete(function(req, res) {
    MenuSection.remove({
      _id: req.params.menu_section_id
    }, function(err, menuSection) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted!'
      });
    });
  });


module.exports = router;


