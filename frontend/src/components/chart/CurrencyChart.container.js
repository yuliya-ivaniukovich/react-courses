import { connect } from 'react-redux';
import CurrencyChart from './CurrencyChart';

const mapStateToProps = state => {
    let currency = state.selectedCurrency;
    let dates = [];
    let rates = [];
    state.ticks.forEach((tick) => {
        dates.push(tick['Date'].split('T')[0]);   // "2017-01-01T00:00:00" => ["2017-01-01", "00:00:00"] => "2017-01-01"
        rates.push(tick['Cur_OfficialRate']);
    });
    return {
        currency: currency,
        dates,
        rates
    };
};

export default connect(mapStateToProps)(CurrencyChart);