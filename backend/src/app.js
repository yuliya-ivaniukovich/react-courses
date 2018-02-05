var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Define routes
app.use('/api/csv', require('./routes/csv'));
app.use('/api/rates', require('./routes/rates'));

// Serve static content if needed
// app.use('/', express.static(path.join(__dirname, 'public')));

// Define

module.exports = app;
