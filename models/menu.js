var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var MenuSchema = new Schema({
  name: String,
  title: String,
  subtitle: String,
  description: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Menu', MenuSchema);