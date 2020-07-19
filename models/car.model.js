const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rented: { type: Boolean, required: true }
}, {
  timestamps: true,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;