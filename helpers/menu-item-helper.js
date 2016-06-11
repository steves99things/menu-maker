MenuItem = require('../models/menu-item');

exports.createMenuItem = function(req) {
  var menuItem = new MenuItem();

  menuItem.name = req.body.name;
  // menuItem.section = req.body.section;
  menuItem.description = req.body.description;
  menuItem.notes = req.body.notes;

  return menuItem;
}

exports.updateMenuItem = function(item, req) {
  var menuitem = item;

  menuItem.name = req.body.name;
  menuItem.section = req.body.section;
  menuItem.description = req.body.description;
  menuItem.price = req.body.price;
  menuItem.unit = req.body.unit;
  menuItem.notes = req.body.notes;
  menuItem.order = req.body.order;
  menuItem.isActive = req.body.isActive;
  
  return menuItem;
}