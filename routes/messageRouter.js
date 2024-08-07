const express = require('express');
const { messages } = require('./indexRouter');

const router = express.Router();

router.get('/:id', (req, res) => {
	res.render('message', { message: messages[req.params.id] });
});

module.exports = router;
