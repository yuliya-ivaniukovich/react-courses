var fetch = require('node-fetch');
var moment = require('moment');
var http = require('http');

const CURRENCIES = {
    'USD': 145,
    'EUR': 292,
    'RUB': 298
};

const TIMEOUT = 20000;

function getRates(code, start, finish) {
    return new Promise(function(res) {
        code == CURRENCIES.RUB ? setTimeout(res, TIMEOUT) : res();
    })
        .then(function() {
			return new Promise(function (resolve, reject) {
                http.get(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${code}?startDate=${start}&endDate=${finish}`, function(res) {
                    let output = '';
                    res.setEncoding('utf8');
                    res.on('data', function(chunk) {
                        output += chunk;
                    });
                    res.on('end', function() {
                        let obj = JSON.parse(output);
                        resolve(obj);
                    });
                }).on('error', function(err) {
                    reject(err);
                });
			});
        });
}

function getCurrencyRates(currency, dateFrom, dateTo) {
    var code = CURRENCIES[currency];
    if (code == null) {
        return new Promise(function(resolve, reject) {
            reject('Invalid currency ' + currency);
        })
    }

    return fetch('http://www.nbrb.by/API/ExRates/Rates/Dynamics/' + code + '?startDate=' + dateFrom + '&endDate=' + dateTo)
        .then(function(response) {
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

    return Promise.all(promises).then(function(results) {
        var csv = 'Date,' + currencies.join(',') + '\n';
        dates.forEach(function(date) {
            csv += date + ',' + results.map(function(result) {
                    return result[date]
                }).join(',') + '\n';
        });
        return csv;
    });
}

function generateDatesRange(dateFrom, dateTo) {
    var from = moment(dateFrom);
    var to = moment(dateTo);
    if (to.diff(from) < 0) {
        return new Promise(function(resolve, reject) {
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

module.exports = {
    getCurrencyRatesCSV: getCurrencyRatesCSV,
    getRates: getRates
};