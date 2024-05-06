const express = require('express');
const router = express.Router();

const numbersController = require('../controllers/numbers.controller.js');

// GET
router.get('/findMissingNumbers', numbersController.findMissingNumbers);

module.exports = router
