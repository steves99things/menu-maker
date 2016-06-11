MenuItem = require('../models/menu-item');

exports.createMenuItem = function(req) {
  var menuItem = new MenuItem();

  menuItem.name = req.body.name;
  // menuItem.section = req.body.section;
  menuItem.prices = [{
    price: req.body.price,
    unit: req.body.unit
  }],
  menuItem.description = req.body.description;
  menuItem.notes = req.body.notes;

  return menuItem;
}

exports.updateMenuItem = function(item, req) {
  var menuItem = item;

  menuItem.name = req.body.name;
  // menuItem.section = req.body.section;
  menuItem.description = req.body.description;
  menuItem.notes = req.body.notes;
  menuItem.order = req.body.order;
  menuItem.isActive = req.body.isActive;
  
  return menuItem;
}

exports.createItemPrice = function(item, req) {
  var menuItem = item;
  var itemPrice = {};

  itemPrice.unit = req.body.unit;
  itemPrice.price = req.body.price;

  menuItem.prices.push(itemPrice);

  return menuItem;
}