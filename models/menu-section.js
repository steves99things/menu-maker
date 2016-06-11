var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var MenuSectionSchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
  menu: ObjectId,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('MenuSection', MenuSectionSchema);