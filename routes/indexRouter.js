const express = require('express');

const messages = require('../data/messages');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
