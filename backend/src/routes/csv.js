var express = require('express');
var express = require('express');
var router = express.Router();
var currency = require('../service/currency');

router.get('/', function(req, res) {
    var currencies = req.query.currency;
    var dateFrom = req.query.dateFrom;
    var dateTo = req.query.dateTo;
    var clientId = req.query.clientId;
    if (currencies && dateFrom && dateTo) {
        if (!Array.isArray(currencies)) {
            currencies = [currencies];
        }

        currency.getCurrencyRatesCSV(currencies, dateFrom, dateTo, clientId)
            .then(function(csv) {
                res.set({
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="data.csv"'
                });
                res.send(csv)
            })
            .catch(function(error) {
                res.json({'error': error}, 500);
            });
    }
    else {
        res.json({'error': 'Invalid request params'}, 400);
    }
});

module.exports = router;