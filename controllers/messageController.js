const messages = require('../data/messages');

function messageController(req, res) {
	res.render('message', { message: messages[req.params.id] });
}

module.exports = messageController;
