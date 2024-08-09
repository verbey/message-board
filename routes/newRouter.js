const express = require('express');

const messages = require('../data/messages');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('form');
});

router.post('/', (req, res) => {
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = router;
