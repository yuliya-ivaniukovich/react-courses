var express = require('express');
var router = express.Router();
var currencyService = require('../service/currency');

router.get('/', function(req, res) {
    var currency = req.query.currency;
    var dateFrom = req.query.dateFrom;
    var dateTo = req.query.dateTo;
    if (currency && dateFrom && dateTo) {
        currencyService.getRates(currency, dateFrom, dateTo)
            .then(function(data) {
                res.json(data);
            })
            .catch(function(error) {
                res.json({'error': error}, 500);
            });
    } else {
        res.json({'error': 'Invalid request params'}, 400);
    }
});

module.exports = router;