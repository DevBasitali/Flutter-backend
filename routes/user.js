const express = require('express');
const router = express.Router();
const { signupUser } = require('../controller/User.js'); // Import the controller

// POST route to handle signup
router.post('/signup', signupUser);

module.exports = router;
