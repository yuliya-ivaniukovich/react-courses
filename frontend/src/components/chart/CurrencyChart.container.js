import { connect } from 'react-redux';
import CurrencyChart from './CurrencyChart';
import {fetchSelectedCurrencyRates} from '../../redux/modules/rates';

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
        onLoad: () => {
            dispatch(fetchSelectedCurrencyRates())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChart);