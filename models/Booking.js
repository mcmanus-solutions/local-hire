const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
  //item ref
  //lender ref
  //borrower ref
  //pick up timestamp
  //return timestamp
  //rating timestamp
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
