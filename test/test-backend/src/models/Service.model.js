const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', ServiceSchema);
