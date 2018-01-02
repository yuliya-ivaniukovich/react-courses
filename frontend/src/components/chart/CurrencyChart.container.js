import { connect } from 'react-redux';
import CurrencyChart from './CurrencyChart';
import {
    CURRENCY_RATES_FETCH, CURRENCY_RATES_FETCH_COMPLETE,
    CURRENCY_RATES_FETCH_ERROR
} from '../../redux/modules/rates';
import {CurrencyRatesApi} from '../../api/CurrencyRatesApi';

const mapStateToProps = state => {
    let currency = state.selectedCurrency;
    if (state.ticks) {
        let dates = [];
        let rates = [];
        state.ticks.forEach((tick) => {
            dates.push(tick['Date'].split('T')[0]);   // "2017-01-01T00:00:00" => ["2017-01-01", "00:00:00"] => "2017-01-01"
            rates.push(tick['Cur_OfficialRate']);
        });
        return {
            currency,
            dates,
            rates
        };
    } else {
        return {
            currency
        };
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: (currency) => {
            dispatch({ type: CURRENCY_RATES_FETCH });
            CurrencyRatesApi.fetchCurrencyRates(currency)
                .then(response => response.json())
                .then(ticks => dispatch({ type: CURRENCY_RATES_FETCH_COMPLETE, payload: ticks }))
                .catch(() => dispatch({ type: CURRENCY_RATES_FETCH_ERROR, payload: 'Cannot fetch currency rates, try again later' }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChart);