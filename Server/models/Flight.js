const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  flight_date: {
    type: Date
  },
  company: {
    type: String
  },
  link: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);
