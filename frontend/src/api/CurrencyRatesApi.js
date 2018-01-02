const CURRENCIES = {
    'USD': 145,
    'EUR': 292,
    'RUB': 298
};

export class CurrencyRatesApi {
    static fetchCurrencyRates(currencySymbol) {
        let code = getCurrencyCode(currencySymbol);
        let startDate = '2017-01-01';
        let endDate = '2017-01-07';
        return fetch(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${code}?startDate=${startDate}&endDate=${endDate}`);
    }
}

const getCurrencyCode = (currencySymbol) => {
    return CURRENCIES[currencySymbol];
};