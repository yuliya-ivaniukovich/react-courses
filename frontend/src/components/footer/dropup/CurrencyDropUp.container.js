import { connect } from 'react-redux';
import {CURRENCY_SELECT} from '../../../redux/modules/rates';
import DropUp from './DropUp';

const currencies = ['USD', 'EUR', 'RUB'];

export const mapStateToProps = state => {
    return {
        options: currencies,
        selectedOption: state.selectedCurrency
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        onSelect: (currency) => {
            dispatch({ type: CURRENCY_SELECT, payload: currency });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropUp);