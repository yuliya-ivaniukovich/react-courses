var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var currencyCSV = require('./src/service/CurrencyCSV')
var fs = require('fs');

var app = express();

var faviconPath = path.join(__dirname, 'public', 'favicon.ico');
if (fs.existsSync(faviconPath)) {
    app.use(favicon(faviconPath));
}
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/csv', function (req, res, next) {
    var currency = req.query.currency;
    var dateFrom = req.query.dateFrom;
    var dateTo = req.query.dateTo;
    if (currency && dateFrom && dateTo) {
        currencyCSV.ReturnCurrencyCSV(res, currency, dateFrom, dateTo);
    }
    else {
        res.json({'Result': 'Invalid request params'});
    }
});

app.use('/', express.static(path.join(__dirname, 'public')));




module.exports = app;
