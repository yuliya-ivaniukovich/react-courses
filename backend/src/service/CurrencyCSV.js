var fetch = require('node-fetch');

const CURRENCIES = {
    'USD': 145,
    'EUR': 292,
    'RUB': 298
};

function ReturnCurrencyCSV(res, currency, dateFrom, dateTo) {
    var code = CURRENCIES[currency];
    if (code != null) {
        return fetch('http://www.nbrb.by/API/ExRates/Rates/Dynamics/'+code+'?startDate='+dateFrom+'&endDate='+dateTo)
            .then(function(response){
                return response.json();
            })
            .then(function(response) {
                var csv = '';
                for (var key in response) {
                    if (response[key] != null) {
                        csv += response[key].Date+','+response[key].Cur_OfficialRate+'\n';
                    }
                }
                res.set ({
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="data.csv"'
                });
                res.send(csv);
                return response;
            })
            .catch(function() {
                res.json({'Result': 'Invalid request'});
            });
    }
    else {
        console.log('Invalid currency');
        res.json({'Result': 'Invalid currency'});
    }
}

module.exports.ReturnCurrencyCSV = ReturnCurrencyCSV;