var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var MenuItemSchema = new Schema({
  name: String,
  section: ObjectId,
  description: String,
  prices: [
    {
      price: { type: Number, min: 0 },
      measurement: String
    }
  ],
  notes: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);