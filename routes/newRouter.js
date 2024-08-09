const express = require('express');

const {
	getNewController,
	postNewController,
} = require('../controllers/newController');

const router = express.Router();

router.get('/', getNewController);

router.post('/', postNewController);

module.exports = router;
