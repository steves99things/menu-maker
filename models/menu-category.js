var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var MenuCategorySchema = new Schema({
  name: String,
  title: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('MenuCategory', MenuCategorySchema);