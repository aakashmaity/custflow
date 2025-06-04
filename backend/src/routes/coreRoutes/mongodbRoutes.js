const express = require('express');
const router = express.Router();
const mongodbController = require('../../controllers/coreControllers/mongodbController');

// Get all collections and their documents
router.get('/collections', mongodbController.getAllCollections);

module.exports = router; 