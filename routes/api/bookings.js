const express = require('express');
const router = express.Router();

// @route   GET api/bookings
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Bookings route'));

module.exports = router;
