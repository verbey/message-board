const express = require('express');

const messages = require('../data/messages');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

indexRouter.get('/new', (req, res) => {
	res.render('form');
});

indexRouter.post('/new', (req, res) => {
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = indexRouter;
