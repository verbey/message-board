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
		// generate text field with a long lorem ipsum message
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec semper tellus. Fusce sit amet nibh vitae orci semper tincidunt. ',
		user: 'Bob',
		added: new Date(),
	},
];

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index', { title: 'Mini Message Board', messages });
	});
};
