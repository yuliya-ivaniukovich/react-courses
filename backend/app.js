var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var currency = require('./src/service/currency');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/csv', function(req, res, next) {
    var currencies = req.query.currency;
    var dateFrom = req.query.dateFrom;
    var dateTo = req.query.dateTo;
    if (currencies && dateFrom && dateTo) {
        if (!Array.isArray(currencies)) {
            currencies = [currencies];
        }

        currency.getCurrencyRatesCSV(currencies, dateFrom, dateTo)
            .then(function(csv) {
                res.set({
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="data.csv"'
                });
                res.send(csv)
            })
            .catch(function(error) {
                res.json({'error': error});
            });
    }
    else {
        res.json({'error': 'Invalid request params'});
    }
});

app.get('/api/rates', function(req, res) {
    var code = req.query.code;
    var start = req.query.start;
    var finish = req.query.finish;
    if (code && start && finish) {
        currency.getRates(code, start, finish)
            .then(function(data) {
                res.status(200);
                res.json(data)
            })
            .catch(function(error) {
                res.type('text/plain');
                res.status(500);
                res.send(error);
            });
    } else {
        res.json({'error': 'Invalid request params'});
    }
});

// Serve static content if needed
// app.use('/', express.static(path.join(__dirname, 'public')));

module.exports = app;
