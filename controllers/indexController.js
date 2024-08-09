const messages = require('../data/messages');

function indexController(req, res) {
	res.render('index', { title: 'Mini Message Board', messages: messages });
}

module.exports = indexController;
