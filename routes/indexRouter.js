const express = require('express');

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec semper tellus. Fusce sit amet nibh vitae orci semper tincidunt. ',
		user: 'Bob',
		added: new Date(),
	},
];

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

module.exports = { indexRouter, messages };
