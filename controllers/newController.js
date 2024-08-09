const messages = require('../data/messages');

function getNewController(req, res) {
	res.render('form');
}

function postNewController(req, res) {
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	});
	res.redirect('/');
}

module.exports = { getNewController, postNewController };
