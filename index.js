require('dotenv').config();

const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
