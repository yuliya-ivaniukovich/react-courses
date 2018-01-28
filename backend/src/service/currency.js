var fetch = require('node-fetch');
var moment = require('moment');

const CURRENCIES = {
    'USD': 145,
    'EUR': 292,
    'RUB': 298
};

function getCurrencyRates(currency, dateFrom, dateTo) {
    var code = CURRENCIES[currency];
    if (code == null) {
        return new Promise(function (resolve, reject) {
            reject('Invalid currency ' + currency);
        })
    }

    return fetch('http://www.nbrb.by/API/ExRates/Rates/Dynamics/' + code + '?startDate=' + dateFrom + '&endDate=' + dateTo)
        .then(function(response){
            return response.json();
        })
        .then(function(rates) {
            var data = {};
            rates.forEach(function(rate) {
                data[rate.Date.split('T')[0]] = rate.Cur_OfficialRate;
            });
            return data;
        });
}

function getCurrencyRatesCSV(currencies, dateFrom, dateTo) {
    var dates = generateDatesRange(dateFrom, dateTo);

    var promises = [];
    currencies.forEach(function(currency) {
        promises.push(getCurrencyRates(currency, dateFrom, dateTo));
    });

    return Promise.all(promises).then(function (results) {
        var csv = 'Date,' + currencies.join(',') + '\n';
        dates.forEach(function(date) {
            csv += date + ',' + results.map(function (result) { return result[date] }).join(',') + '\n';
        });
        return csv;
    });
}

function generateDatesRange(dateFrom, dateTo) {
    var from = moment(dateFrom);
    var to = moment(dateTo);
    if (to.diff(from) < 0) {
        return new Promise(function (resolve, reject) {
            reject('dateFrom cannot be after dateTo');
        })
    }

    var range = [];
    while (to.diff(from, 'days') >= 0) {
        range.push(from.format('YYYY-MM-DD'));
        from.add(1, 'days');
    }
    return range;
}

module.exports.getCurrencyRatesCSV = getCurrencyRatesCSV;