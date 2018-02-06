var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define routes
app.use('/api/csv', require('./routes/csv'));
app.use('/api/rates', require('./routes/rates'));

// Serve static content if needed
// app.use('/', express.static(path.join(__dirname, 'public')));

// Define

module.exports = app;
